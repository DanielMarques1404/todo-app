import { cn } from "../../utils/cn";

type CompleteTodoButtonProps = {
  active: boolean;
  toggleComplete: () => void;
};

export const CompleteTodoButton = ({
  active,
  toggleComplete,
}: CompleteTodoButtonProps) => {
  return (
    <div
      className={cn(
        "rounded-full w-6 h-6 border-2 border-slate-300 dark:border-slate-600",
        active && "bg-blue-300",
      )}
      onClick={toggleComplete}
    ></div>
  );
};
