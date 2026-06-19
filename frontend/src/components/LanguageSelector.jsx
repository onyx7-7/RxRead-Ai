import React from "react";
import { motion } from "framer-motion";
import { languages } from "../data/mockData";

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5">
      
      {/* Header */}
      <div className="mb-3">
        <p className="text-[11px] text-slate-500 uppercase tracking-[0.2em]">
          Select language
        </p>
        <p className="text-xs text-slate-400 mt-1">
          زبان منتخب کریں
        </p>
      </div>

      {/* Language List */}
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => {
          const isActive = currentLanguage === lang.code;

          return (
            <motion.button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm transition-all duration-200 border ${
                isActive
                  ? "bg-white/10 border-white/20 text-white shadow-sm"
                  : "bg-transparent border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
              }`}
              aria-pressed={isActive}
              aria-label={`Switch to ${lang.label}`}
            >
              <span className="text-base leading-none" aria-hidden="true">
                {lang.flag}
              </span>

              <span className="whitespace-nowrap">
                {lang.nativeLabel}
              </span>

              {/* subtle active indicator */}
              {isActive && (
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;