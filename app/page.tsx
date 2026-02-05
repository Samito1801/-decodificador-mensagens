import AppShell from "@/components/layout/AppShell";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import QuickActions from "@/components/ai-actions/QuickActions";

export default function HomePage() {
  return (
    <AppShell title="StudyOS" subtitle="Your personal study operating system">
      <section className="grid gap-4">
        <SectionHeader title="Daily Overview" action={<Button variant="ghost">Edit day</Button>} />
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Priority Tasks" subtitle="Top focus for today">
            <ul className="space-y-2">
              <li>Review calculus chapter 5</li>
              <li>Draft research summary notes</li>
              <li>Complete 30-minute deep work block</li>
            </ul>
          </Card>
          <Card title="Study Time Tracker" subtitle="Today vs weekly goal">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">2h 10m</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Goal: 4h</p>
              </div>
              <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                <p>Mon 2h</p>
                <p>Tue 3h</p>
                <p>Wed 1h</p>
              </div>
            </div>
          </Card>
          <Card title="Subjects in Focus" subtitle="Rotate weekly">
            <div className="flex flex-wrap gap-2">
              {['Biology', 'Calculus', 'UX Writing', 'Portuguese'].map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-xs"
                >
                  {subject}
                </span>
              ))}
            </div>
          </Card>
          <Card title="Weekly Progress" subtitle="Snapshot">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Study consistency</span>
                <span>82%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-900">
                <div className="h-2 rounded-full bg-accent w-4/5" />
              </div>
              <div className="flex justify-between text-xs">
                <span>Tasks completed</span>
                <span>12 / 15</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-900">
                <div className="h-2 rounded-full bg-accent w-3/4" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Quick AI Actions" />
        <QuickActions />
      </section>

      <section className="grid gap-4">
        <SectionHeader title="Daily Agenda" action={<Button variant="ghost">Add</Button>} />
        <Card title="Timeline" subtitle="Keep the day frictionless">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>08:30 - Morning review</span>
              <span className="text-xs text-slate-400">30m</span>
            </div>
            <div className="flex items-center justify-between">
              <span>10:00 - Deep work block</span>
              <span className="text-xs text-slate-400">90m</span>
            </div>
            <div className="flex items-center justify-between">
              <span>14:00 - Flashcards</span>
              <span className="text-xs text-slate-400">45m</span>
            </div>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
