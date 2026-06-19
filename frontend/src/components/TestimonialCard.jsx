import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const stars = 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => {
          const active = i < testimonial.rating;

          return (
            <FiStar
              key={i}
              size={13}
              className={active ? "text-yellow-400" : "text-slate-600"}
              fill={active ? "currentColor" : "none"}
            />
          );
        })}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed">
        {`"${testimonial.text}"`}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1">

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xs font-medium">
          {testimonial.avatar}
        </div>

        {/* Info */}
        <div className="leading-tight">
          <p className="text-white text-sm font-medium">
            {testimonial.name}
          </p>
          <p className="text-slate-500 text-xs mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;