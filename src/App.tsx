import { useState } from "react";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import type { TodoItemType } from "./types";

export function App() {
  const [items, setItems] = useState<TodoItemType[]>([]);

  const onCreateTodo = (label: string) => {
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
    <main className="min-h-screen  text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex max-w-xl flex-col gap-6 bg-purple-100 min-h-screen">
        <Header />
        <div className="flex flex-col gap-6 -mt-32 px-4">
          <TodoInput onCreate={onCreateTodo} />
          <div className="w-full bg-white dark:bg-slate-900 rounded-md overflow-hidden">
            <TodoList
              items={items}
              onRemoveItem={(id) =>
                setItems(items.filter((item) => item.id !== id))
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
