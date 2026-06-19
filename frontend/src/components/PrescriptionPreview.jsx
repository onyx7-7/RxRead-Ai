import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

const PrescriptionPreview = ({ imageDataURL }) => {
  const [zoomed, setZoomed] = useState(false);
  const hasImage = Boolean(imageDataURL);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-white text-sm font-medium">
          Prescription preview
        </p>

        {hasImage && (
          <button
            onClick={() => setZoomed((v) => !v)}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
          >
            {zoomed ? <FiZoomOut size={14} /> : <FiZoomIn size={14} />}
            {zoomed ? "Zoom out" : "Zoom in"}
          </button>
        )}
      </div>

      {/* Image Preview */}
      {hasImage ? (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <motion.img
            src={imageDataURL}
            alt="Uploaded prescription"
            className="w-full object-contain cursor-zoom-in"
            animate={{
              scale: zoomed ? 1.6 : 1,
            }}
            transition={{ duration: 0.25 }}
            style={{
              maxHeight: zoomed ? "520px" : "260px",
            }}
            onClick={() => setZoomed((v) => !v)}
          />
        </div>
      ) : (
        /* More realistic paper-style mock */
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 font-mono text-xs leading-relaxed text-slate-300">

          <div className="flex justify-between text-slate-400 mb-2">
            <span className="font-semibold text-slate-200">
              Dr. Clinic Note
            </span>
            <span>15/01/2024</span>
          </div>

          <p className="text-slate-500 text-[11px] mb-3">
            General Physician · Medical Center
          </p>

          <div className="border-t border-white/10 my-3" />

          <p className="text-slate-300 mb-2">Rx</p>

          <div className="space-y-1 text-slate-200">
            <p>1. Amoxicillin 500mg — TDS × 7 days</p>
            <p>2. Paracetamol 500mg — SOS (max 4/day)</p>
            <p>3. Cetirizine 10mg — OD × 5 days</p>
            <p>4. Vitamin C 1000mg — OD × 14 days</p>
          </div>

          <div className="border-t border-white/10 my-4" />

          <p className="text-slate-400 italic text-[11px]">
            Take after meals. Stay hydrated. Follow up if symptoms persist.
          </p>

          <div className="mt-5 flex justify-end">
            <div className="w-28 h-10 border-b border-slate-600 text-slate-500 text-[10px] flex items-end justify-center pb-1">
              Doctor signature
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrescriptionPreview;