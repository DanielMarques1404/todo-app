import { useState } from "react";
import type { TodoItemType } from "../types";

type TodoFilter = "all" | "active" | "completed";

const moveItem = <T,>(items: T[], fromIndex: number, toIndex: number) => {
  const nextItems = [...items];
  const [movedItem] = nextItems.splice(fromIndex, 1);

  if (!movedItem) return items;

  nextItems.splice(toIndex, 0, movedItem);

  return nextItems;
};

export const useTodos = () => {
  const [items, setItems] = useState<TodoItemType[]>([]);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const createTodo = (label: string) => {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: crypto.randomUUID(),
        label,
        completed: false,
      },
    ]);
  };

  const completeItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const clearCompleted = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.completed));
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const reorderItems = (fromIndex: number, toIndex: number) => {
    if (filter !== "all" || fromIndex === toIndex) return;

    setItems((currentItems) => {
      const isValidMove =
        fromIndex >= 0 &&
        toIndex >= 0 &&
        fromIndex < currentItems.length &&
        toIndex < currentItems.length;

      if (!isValidMove) return currentItems;

      return moveItem(currentItems, fromIndex, toIndex);
    });
  };

  const filteredItems = items.filter((item) => {
    switch (filter) {
      case "active":
        return !item.completed;
      case "completed":
        return item.completed;
      case "all":
        return true;
    }
  });

  return {
    filter,
    canReorder: filter === "all",
    filteredItems,
    createTodo,
    completeItem,
    clearCompleted,
    removeItem,
    reorderItems,
    setFilter,
  };
};
