import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-7
        transition-all
        duration-300
        hover:border-cyan-500/30
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white text-xl font-bold mb-3 font-display">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

export default FeatureCard