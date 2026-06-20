import type { TodoItemType } from "../types";
import { TodoItem } from "./TodoItem";

type TodoItemProps = {
  items: TodoItemType[];
  onRemoveItem: (id: string) => void;
};

export const TodoList = ({ items, onRemoveItem }: TodoItemProps) => {
  return (
    <div className="flex flex-col gap-1 w-full shadow-xl shadow-slate-200/70 dark:shadow-black/20">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onRemove={onRemoveItem} />
      ))}
      <div className="p-2 text-center text-sm text-slate-500 dark:text-slate-400">
        {items.length === 0
          ? "No todos left"
          : `${items.filter((item) => item.completed).length} of ${items.length} completed`}
      </div>
    </div>
  );
};
