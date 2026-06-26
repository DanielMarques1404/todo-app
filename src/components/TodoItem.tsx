import { useState } from "react";
import type { TodoItemType } from "../types";
import { cn } from "../utils/cn";
import { CompleteTodoButton } from "./ui/CompleteTodoButton";
import { useSortable } from "@dnd-kit/react/sortable";

type TodoItemProps = {
  item: TodoItemType;
  index: number;
  onComplete?: (id: string) => void;
  onRemove: (id: string) => void;
};

export const TodoItem = ({ item, index, onComplete, onRemove }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(item?.completed || false);
  const { ref } = useSortable({
    id: item.id,
    index: index,
  });

  return (
    <li ref={ref} className="flex items-center justify-between bg-white p-5 dark:bg-slate-900 w-full border-b border-gray-300">
      <div className="flex items-center gap-4">
        <CompleteTodoButton
          active={isCompleted}
          toggleComplete={() => {
            setIsCompleted(!isCompleted);
            onComplete?.(item.id);
          }}
        />
        <span
          className={cn(
            "text-md font-semibold text-gray-600 dark:text-slate-300",
            isCompleted && "line-through",
          )}
        >
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
    </li>
  );
};
