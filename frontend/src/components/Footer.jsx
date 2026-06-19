import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Upload Prescription', path: '/upload' },
    { label: 'About Us', path: '/about' },
  ]

  const socials = [
    { Icon: FiGithub, label: 'GitHub', href: '#' },
    { Icon: FiTwitter, label: 'Twitter', href: '#' },
    { Icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-14 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                Rx
              </div>

              <span className="text-white font-semibold text-lg tracking-tight">
                RxRead <span className="text-cyan-400">AI</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Making healthcare easier to understand by translating prescriptions into simple, clear language.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>

            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-400 hover:text-white transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mission + Socials */}
          <div>
            <h4 className="text-white font-medium mb-4">Our Mission</h4>

            <p className="text-slate-400 text-sm leading-relaxed">
              Helping patients understand prescriptions clearly—because healthcare only works when it’s understood.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RxRead AI. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <FiHeart className="text-red-400" size={14} /> for better healthcare access
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer