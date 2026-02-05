import Button from "@/components/ui/Button";

const actions = [
  "Summarize content",
  "Explain subject",
  "Create study plan",
  "Organize daily schedule",
  "Create revision checklist",
  "Transform text into structured notes"
];

const QuickActions = () => {
  return (
    <div className="grid gap-3">
      {actions.map((action) => (
        <div key={action} className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-2xl px-4 py-3">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{action}</span>
          <Button variant="ghost">Run</Button>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
