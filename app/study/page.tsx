import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function StudyPage() {
  return (
    <AppShell title="Study" subtitle="Build your learning engine">
      <section className="grid gap-4">
        <SectionHeader title="Subjects" action={<Button variant="ghost">New subject</Button>} />
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Cognitive Science" subtitle="Next session: Wed">
            <p>Plan: Memory systems, retrieval practice, and flashcard review.</p>
          </Card>
          <Card title="Data Structures" subtitle="Focus: Trees">
            <p>Topics: Binary search trees, balancing, traversal algorithms.</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Study Plan Generator" />
        <Card title="Weekly Plan" subtitle="AI-powered">
          <div className="flex flex-col gap-3">
            <p>Generate a balanced schedule based on your upcoming exams.</p>
            <div className="flex flex-wrap gap-2">
              <Button>Explain topic</Button>
              <Button>Create weekly study plan</Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Topic Checklists" />
        <Card title="Calculus - Integration" subtitle="6 topics">
          <ul className="list-disc pl-4 space-y-2">
            <li>Substitution techniques</li>
            <li>Integration by parts</li>
            <li>Partial fractions</li>
          </ul>
        </Card>
      </section>
    </AppShell>
  );
}
