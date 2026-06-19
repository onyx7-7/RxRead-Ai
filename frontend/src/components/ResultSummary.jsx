import React from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMapPin,
  FiCalendar,
  FiRefreshCw,
} from "react-icons/fi";

const ResultSummary = ({ data, summaryText }) => {
  const { doctor, patient } = data;

  const initials =
    doctor?.name
      ?.split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "DR";

  return (
    <div className="space-y-4">

      {/* Doctor Info */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
      >
        <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-4">
          Doctor
        </p>

        <div className="flex items-start gap-4">

          {/* Avatar */}
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
            {initials}
          </div>

          {/* Info */}
          <div>
            <p className="text-white font-medium">{doctor.name}</p>

            <p className="text-cyan-400 text-sm mt-0.5">
              {doctor.specialization}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <FiMapPin size={11} />
                {doctor.hospital}
              </span>

              <span className="flex items-center gap-1.5">
                <FiUser size={11} />
                License: {doctor.license}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Patient Info */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
      >
        <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-4">
          Patient details
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <p className="text-slate-500 text-xs">Name</p>
            <p className="text-white text-sm mt-1">{patient.name}</p>
          </div>

          <div>
            <p className="text-slate-500 text-xs">Age</p>
            <p className="text-white text-sm mt-1">{patient.age} years</p>
          </div>

          <div className="flex items-center gap-2">
            <FiCalendar className="text-slate-400" size={12} />
            <div>
              <p className="text-slate-500 text-xs">Prescribed</p>
              <p className="text-white text-sm mt-1">{patient.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FiRefreshCw className="text-slate-400" size={12} />
            <div>
              <p className="text-slate-500 text-xs">Follow-up</p>
              <p className="text-white text-sm mt-1">
                {data.followUp}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
      >
        <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-2">
          Summary
        </p>

        <p className="text-slate-300 text-sm leading-relaxed">
          {summaryText}
        </p>
      </motion.div>
    </div>
  );
};

export default ResultSummary;