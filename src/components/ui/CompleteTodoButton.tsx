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
        "flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-300",
        active &&
          "border-none bg-linear-to-br from-cyan-300 to-purple-500",
      )}
      onClick={toggleComplete}
    >
      <img
        src="/assets/images/icon-check.svg"
        alt=""
        className={cn("h-3 w-3", active ? "block" : "hidden")}
      />
    </div>
  );
};
