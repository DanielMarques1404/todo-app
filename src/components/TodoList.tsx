import type { TodoItemType } from "../types";
import { TodoItem } from "./TodoItem";
import { TodoSummary } from "./TodoSummary";

type TodoItemProps = {
  items: TodoItemType[];
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onCompleteItem: (id: string) => void;
  onClearCompleted: () => void;
  onRemoveItem: (id: string) => void;
};

export const TodoList = ({
  items,
  onFilterChange,
  onCompleteItem,
  onClearCompleted,
  onRemoveItem,
}: TodoItemProps) => {
  return (
    <div className="flex flex-col gap-1 w-full shadow-xl shadow-slate-200/70 dark:shadow-black/20">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={onRemoveItem}
          onComplete={onCompleteItem}
        />
      ))}
      <TodoSummary
        total={items.length}
        completed={items.filter((item) => item.completed).length}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
