"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
}

const Button = ({ children, onClick, variant = "primary", ariaLabel }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "px-4 py-2 rounded-full text-sm font-medium transition",
        variant === "primary"
          ? "bg-accent text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5"
          : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
