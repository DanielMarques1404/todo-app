import { Header } from "./components/Header";
import { TodoFilter } from "./components/TodoFilter";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

export function App() {
  const {
    filteredItems,
    createTodo,
    completeItem,
    clearCompleted,
    removeItem,
    reorderItems,
    canReorder,
    setFilter,
  } = useTodos();

  return (
    <main className="min-h-screen text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="flex min-h-screen flex-col gap-6 bg-gray-50 dark:bg-navy-950">
        <Header />
        <div className="flex flex-col gap-6 -mt-32 px-4 max-w-125 mx-auto w-full">
          <TodoInput onCreate={createTodo} />
          <div className="w-full bg-white dark:bg-slate-900 rounded-md overflow-hidden">
            <TodoList
              items={filteredItems}
              onRemoveItem={removeItem}
              onCompleteItem={completeItem}
              onClearCompleted={clearCompleted}
              onFilterChange={(newFilter) => setFilter(newFilter)}
              onReorderItems={reorderItems}
              canReorder={canReorder}
            />
          </div>
          <div className="flex items-center justify-center sm:hidden w-full bg-blue-500 shadow-xl shadow-slate-200/70 dark:shadow-black/20">
            <TodoFilter
              onFilterChange={(newFilter) => setFilter(newFilter)}
            />
          </div>
          {canReorder && (
            <p className="text-center text-sm font-semibold text-gray-600 dark:text-purple-600">
              Drag and drop to reorder list
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
