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
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Mark todo as active" : "Mark todo as completed"}
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 transition-colors dark:border-slate-600",
        "hover:border-transparent hover:bg-linear-to-br hover:from-cyan-300 hover:to-purple-500",
        active && "border-transparent bg-linear-to-br from-cyan-300 to-purple-500",
      )}
      onClick={toggleComplete}
    >
      <span
        className={cn(
          "flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full",
          !active && "bg-white dark:bg-slate-900",
        )}
      >
        <img
          src="/assets/images/icon-check.svg"
          alt=""
          className={cn("h-3 w-3", active ? "block" : "hidden")}
        />
      </span>
    </button>
  );
};
