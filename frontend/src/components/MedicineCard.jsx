import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiClock,
  FiCalendar,
  FiInfo,
} from "react-icons/fi";
import { getMedicineColorClasses } from "../utils/helpers";

const MedicineCard = ({ medicine, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const colors = getMedicineColorClasses(medicine.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full p-5 text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          
          {/* Left content */}
          <div className="flex gap-4">
            
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
              {medicine.icon}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-white font-medium text-base">
                  {medicine.name}
                </h3>

                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full border ${colors.badge}`}
                >
                  {medicine.type}
                </span>
              </div>

              <p className={`text-sm mt-1 ${colors.text}`}>
                {medicine.brandName}
              </p>

              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                {medicine.purpose}
              </p>
            </div>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 mt-1"
          >
            <FiChevronDown size={18} />
          </motion.div>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">
            <span className="text-white font-medium">{medicine.dosage}</span>
          </span>

          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <FiClock size={11} />
            {medicine.frequency}
          </span>

          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <FiCalendar size={11} />
            {medicine.duration}
          </span>
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-white/5 space-y-4">

              {/* Instructions */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FiInfo className="text-slate-300" size={14} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                    Instructions
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {medicine.instructions}
                  </p>
                </div>
              </div>

              {/* Warnings (softer treatment) */}
              {medicine.warnings?.length > 0 && (
                <div className="rounded-xl border border-yellow-500/15 bg-yellow-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FiAlertTriangle className="text-yellow-400" size={14} />
                    <p className="text-yellow-300 text-xs uppercase tracking-wider">
                      Warnings
                    </p>
                  </div>

                  <ul className="space-y-1">
                    {medicine.warnings.map((w, i) => (
                      <li
                        key={i}
                        className="text-slate-300 text-sm flex gap-2"
                      >
                        <span className="text-yellow-400 mt-1">•</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MedicineCard;