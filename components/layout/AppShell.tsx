"use client";

import { motion } from "framer-motion";
import BottomNav from "./BottomNav";
import { usePreferences } from "@/hooks/usePreferences";
import Button from "@/components/ui/Button";

const AppShell = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) => {
  const { theme, toggleTheme } = usePreferences();

  return (
    <div className="min-h-screen pb-24">
      <header className="px-6 pt-6 pb-4 md:px-10">
        <div className="flex items-center justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold"
            >
              {title}
            </motion.h1>
            {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
          </div>
          <Button variant="ghost" onClick={toggleTheme} ariaLabel="Toggle theme">
            {theme === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </header>
      <main className="px-6 md:px-10 space-y-6">{children}</main>
      <BottomNav />
    </div>
  );
};

export default AppShell;
