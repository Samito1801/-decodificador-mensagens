import "./globals.css";
import type { Metadata } from "next";
import { PreferencesProvider } from "@/hooks/usePreferences";

export const metadata: Metadata = {
  title: "StudyOS",
  description: "Personal productivity and study operating system"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
