import { useState } from "react";
import type { TodoItemType } from "../types";

type TodoFilter = "all" | "active" | "completed";

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
    filteredItems,
    createTodo,
    completeItem,
    clearCompleted,
    removeItem,
    setFilter,
  };
};
