import { useState } from "react";
import type { TodoItemType } from "../types";
import { cn } from "../utils/cn";
import { CompleteTodoButton } from "./ui/CompleteTodoButton";
import { useSortable } from "@dnd-kit/react/sortable";

type TodoItemProps = {
  item: TodoItemType;
  index: number;
  canReorder: boolean;
  onComplete?: (id: string) => void;
  onRemove: (id: string) => void;
};

export const TodoItem = ({
  item,
  index,
  canReorder,
  onComplete,
  onRemove,
}: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(item?.completed || false);
  const { ref } = useSortable({
    id: item.id,
    index,
    disabled: !canReorder,
  });

  return (
    <li
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between border-b border-gray-300 bg-gray-50 p-5 dark:border-purple-800 dark:bg-navy-900",
        canReorder && "cursor-grab active:cursor-grabbing",
      )}
    >
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
            "text-md font-semibold text-navy-850 dark:text-purple-300",
            isCompleted && "line-through",
          )}
        >
          {item.label}
        </span>
      </div>
      {onRemove && (
        <button
          className="text-gray-600 hover:text-navy-850 focus:outline-none dark:text-purple-600 dark:hover:text-purple-100"
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
