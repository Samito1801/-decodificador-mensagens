"use client";

import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { usePreferences } from "@/hooks/usePreferences";

export default function SettingsPage() {
  const { language, setLanguage, theme, toggleTheme } = usePreferences();

  return (
    <AppShell title="Settings" subtitle="Tune StudyOS to your flow">
      <section className="grid gap-4">
        <SectionHeader title="Language" />
        <Card title="Interface language" subtitle="Portuguese or English">
          <div className="flex gap-2">
            <Button variant={language === "en" ? "primary" : "ghost"} onClick={() => setLanguage("en")}
            >
              English
            </Button>
            <Button variant={language === "pt" ? "primary" : "ghost"} onClick={() => setLanguage("pt")}
            >
              Português
            </Button>
          </div>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Theme" />
        <Card title="Appearance" subtitle="Light or dark">
          <div className="flex items-center justify-between">
            <p className="text-sm">Current: {theme}</p>
            <Button onClick={toggleTheme}>Toggle theme</Button>
          </div>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Preferences" />
        <Card title="Focus preferences" subtitle="Single-user setup">
          <p>Enable gentle reminders and keep your core modules front and center.</p>
        </Card>
      </section>
    </AppShell>
  );
}
