"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Study", href: "/study" },
  { label: "Organizer", href: "/organizer" },
  { label: "Library", href: "/library" },
  { label: "AI", href: "/ai" }
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between text-xs font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex-1 text-center py-2 rounded-full transition-colors",
              pathname === item.href
                ? "text-accent bg-slate-100 dark:bg-slate-900"
                : "text-slate-500 dark:text-slate-400"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
