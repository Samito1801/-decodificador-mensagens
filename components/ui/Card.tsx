"use client";

import { motion } from "framer-motion";

const Card = ({ title, children, subtitle }: { title: string; subtitle?: string; children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card-light dark:bg-card-dark rounded-3xl p-5 shadow-soft border border-slate-100/50 dark:border-slate-800"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">{children}</div>
    </motion.section>
  );
};

export default Card;
