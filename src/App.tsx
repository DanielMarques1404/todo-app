import { useState } from "react";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import type { TodoItemType } from "./types";
import { TodoFilter } from "./components/TodoFilter";

export function App() {
  const [items, setItems] = useState<TodoItemType[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const createToDo = (label: string) => {
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

  const filteredItems = (
    filter: "all" | "active" | "completed",
  ): TodoItemType[] => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.completed);
      case "completed":
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  };

  return (
    <main className="min-h-screen  text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex max-w-xl flex-col gap-6 bg-gray-50 min-h-screen">
        <Header />
        <div className="flex flex-col gap-6 -mt-32 px-4">
          <TodoInput onCreate={createToDo} />
          <div className="w-full bg-white dark:bg-slate-900 rounded-md overflow-hidden">
            <TodoList
              items={filteredItems(filter)}
              onRemoveItem={removeItem}
              onCompleteItem={completeItem}
              onClearCompleted={clearCompleted}
              onFilterChange={(newFilter) => setFilter(newFilter)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto sm:hidden w-full px-4 bg-white shadow-xl shadow-slate-200/70 dark:shadow-black/20">
          <TodoFilter filter={filter} onFilterChange={(newFilter) => setFilter(newFilter)} />
        </div>
      </section>
    </main>
  );
}
