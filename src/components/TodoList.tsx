import { DragDropProvider, type DragEndEvent } from "@dnd-kit/react";
import type { TodoItemType } from "../types";
import { TodoItem } from "./TodoItem";
import { TodoSummary } from "./TodoSummary";

type TodoItemProps = {
  items: TodoItemType[];
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onCompleteItem: (id: string) => void;
  onClearCompleted: () => void;
  onRemoveItem: (id: string) => void;
  onReorderItems: (fromIndex: number, toIndex: number) => void;
  canReorder: boolean;
};

export const TodoList = ({
  items,
  onFilterChange,
  onCompleteItem,
  onClearCompleted,
  onRemoveItem,
  onReorderItems,
  canReorder,
}: TodoItemProps) => {
  const handleDragEnd = ({ operation }: DragEndEvent) => {
    const activeId = operation.source?.id;
    const overId = operation.target?.id;

    if (!canReorder || !activeId || !overId) return;

    const activeIndex = items.findIndex((item) => item.id === activeId);
    const overIndex = items.findIndex((item) => item.id === overId);

    onReorderItems(activeIndex, overIndex);
  };

  return (
    <div className="flex flex-col gap-1 w-full shadow-xl shadow-slate-200/70 dark:shadow-black/20">
      <DragDropProvider onDragEnd={handleDragEnd}>
        <ul>
          {items.map((item, idx) => (
            <TodoItem
              key={item.id}
              item={item}
              index={idx}
              canReorder={canReorder}
              onRemove={onRemoveItem}
              onComplete={onCompleteItem}
            />
          ))}
        </ul>
      </DragDropProvider>
      <TodoSummary
        total={items.length}
        completed={items.filter((item) => item.completed).length}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
