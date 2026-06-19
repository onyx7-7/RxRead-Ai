import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Upload', path: '/upload' },
  { label: 'About', path: '/about' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
      setIsOpen(false)
  }, [location.pathname])

  const linkBase =
    'px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200'

  const getLinkClass = (active) =>
    active
      ? `${linkBase} text-white bg-cyan-500/10 border border-cyan-500/20`
      : `${linkBase} text-slate-300 hover:text-white hover:bg-white/5`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              Rx
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                RxRead<span className="text-cyan-400">AI</span>
              </span>

              <span className="hidden lg:inline-flex px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                AI Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link key={link.path} to={link.path} className={getLinkClass(active)}>
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/upload"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              Analyze Prescription
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={getLinkClass(active)}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                to="/upload"
                className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center shadow-md"
              >
                Analyze Prescription
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar