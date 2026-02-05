import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function LibraryPage() {
  return (
    <AppShell title="Smart Library" subtitle="Centralize your knowledge">
      <section className="grid gap-4">
        <SectionHeader title="Upload & Store" action={<Button variant="ghost">Add material</Button>} />
        <Card title="Quick Capture" subtitle="Paste or upload PDFs">
          <p>Drop lecture slides, articles, or notes to build a searchable knowledge base.</p>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Smart Search" />
        <Card title="Recent Materials" subtitle="AI-tagged">
          <ul className="space-y-2">
            <li>"Neuroscience Overview" - Summary ready</li>
            <li>"Design Systems" - 4 key themes</li>
            <li>"Project Management" - Revision checklist</li>
          </ul>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="AI Summary" />
        <Card title="Merge Content" subtitle="Structured summary">
          <p>Combine multiple notes into a single digest with action items.</p>
          <div className="mt-3">
            <Button>Generate summary</Button>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
