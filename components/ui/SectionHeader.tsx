const SectionHeader = ({ title, action }: { title: string; action?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      {action}
    </div>
  );
};

export default SectionHeader;
