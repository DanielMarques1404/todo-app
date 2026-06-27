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
        "flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-colors dark:border-purple-800",
        "hover:border-transparent hover:bg-linear-to-br hover:from-check-start hover:to-check-end",
        active && "border-transparent bg-linear-to-br from-check-start to-check-end",
      )}
      onClick={toggleComplete}
    >
      <span
        className={cn(
          "flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full",
          !active && "bg-gray-50 dark:bg-navy-900",
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
