import AppShell from "@/components/layout/AppShell";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import QuickActions from "@/components/ai-actions/QuickActions";

export default function AIPage() {
  return (
    <AppShell title="AI Action Center" subtitle="One-tap productivity">
      <section className="grid gap-4">
        <SectionHeader title="Action Buttons" />
        <Card title="AI Actions" subtitle="No chat required">
          <QuickActions />
        </Card>
      </section>
    </AppShell>
  );
}
