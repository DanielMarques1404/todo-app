import { useState } from "react";
import type { TodoItemType } from "../types";
import { CompleteTodoButton } from "./ui/CompleteTodoButton";
import { cn } from "../utils/cn";

type TodoItemProps = {
  item: TodoItemType;
  onRemove: (id: string) => void;
};

export const TodoItem = ({ item, onRemove }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(item?.completed || false);

  return (
    <div className="flex items-center justify-between rounded-md bg-white p-4 shadow-xl shadow-slate-200/70 dark:bg-slate-900 dark:shadow-black/20 w-full">
      <div className="flex items-center gap-4">
        <CompleteTodoButton active={isCompleted} toggleComplete={() => setIsCompleted(!isCompleted)} />
        <span className={cn("text-sm text-slate-700 dark:text-slate-300", isCompleted && "line-through")}>
          {item.label}
        </span>
      </div>
      {onRemove && (
        <button
          className="text-slate-400 hover:text-red-500 focus:outline-none"
          onClick={() => onRemove(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
