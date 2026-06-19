import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { processingSteps } from "../data/mockData";

const LoadingAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let index = 0;

    const runStep = () => {
      if (index >= processingSteps.length) {
        setTimeout(() => onComplete?.(), 600);
        return;
      }

      setCurrentStep(index);

      const step = processingSteps[index];

      setTimeout(() => {
        setCompleted((prev) => [...prev, index]);
        index++;
        runStep();
      }, step.duration);
    };

    runStep();
  }, [onComplete]);

  const progress = Math.round(
    (completed.length / processingSteps.length) * 100
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">

      {/* Logo */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/20">
          M
        </div>
      </motion.div>

      {/* Heading */}
      <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-2">
        Reading your prescription
      </h2>

      <p className="text-slate-400 text-sm text-center max-w-sm mb-10 leading-relaxed">
        We’re extracting medicine details and preparing a simple explanation for you.
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-3 mb-8">
        {processingSteps.map((step, i) => {
          const isDone = completed.includes(i);
          const isActive = currentStep === i && !isDone;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                isDone
                  ? "bg-white/5 border-white/10"
                  : isActive
                  ? "bg-white/5 border-white/15"
                  : "bg-transparent border-white/5"
              }`}
            >
              {/* Status Icon */}
              <div className="w-8 h-8 flex items-center justify-center text-base">
                {isDone ? (
                  <span className="text-emerald-400">✓</span>
                ) : isActive ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                  />
                ) : (
                  <span className="text-slate-600">{step.icon}</span>
                )}
              </div>

              {/* Label */}
              <span
                className={`text-sm ${
                  isDone
                    ? "text-slate-200"
                    : isActive
                    ? "text-white"
                    : "text-slate-500"
                }`}
              >
                {step.label}
              </span>

              {/* Status Text */}
              <span className="ml-auto text-xs text-slate-500">
                {isDone ? "Done" : isActive ? "Processing" : ""}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;