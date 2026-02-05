import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function OrganizerPage() {
  return (
    <AppShell title="Organizer" subtitle="Design a calm daily flow">
      <section className="grid gap-4">
        <SectionHeader title="Task Manager" action={<Button variant="ghost">Add task</Button>} />
        <Card title="Today" subtitle="Smart priority">
          <ul className="space-y-2">
            <li>Finish research outline</li>
            <li>Gym + mobility routine</li>
            <li>Review internship applications</li>
          </ul>
        </Card>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Habit Tracker" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Daily Habits" subtitle="Keep momentum">
            <p>Meditation, hydration, 25-minute focus blocks.</p>
          </Card>
          <Card title="Weekly Routines" subtitle="Reset and review">
            <p>Sunday review, planning, and reflection.</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Goals & Prioritization" />
        <Card title="Personal Goals" subtitle="Q2 direction">
          <p>Build consistent study system and publish research summary by month-end.</p>
          <div className="mt-3">
            <Button>Reorganize day</Button>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
