import { useState } from "react";
import { Header } from "./components/Header";
import type { TodoItemType } from "./types";
import { TodoList } from "./components/TodoList";

export function App() {
  const [items, setItems] = useState<TodoItemType[]>([]);

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

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex max-w-xl flex-col gap-6">
        <Header onCreateTodo={createTodo} />
        <div className="rounded-md bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-slate-900 dark:shadow-black/20">
          <TodoList items={items} onRemoveItem={(id) => setItems(items.filter((item) => item.id !== id))} />
        </div>
      </section>
    </main>
  )
}
