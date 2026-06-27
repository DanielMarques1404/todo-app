import { TodoFilter } from "./TodoFilter";

type TodoSummaryProps = {
  total: number;
  completed: number;
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onClearCompleted: () => void;
};

export const TodoSummary = ({
  total,
  completed,
  onFilterChange,
  onClearCompleted,
}: TodoSummaryProps) => {
  return (
    <div className="flex items-center justify-between bg-white p-5 dark:bg-slate-900 w-full border-b border-gray-300 text-sm text-gray-600 dark:text-slate-400">
      <div>
        {`${total - completed} ${total - completed === 1 ? "item" : "items"} left`}
      </div>
      <div className="hidden sm:block">
        <TodoFilter onFilterChange={onFilterChange} />
      </div>
      <div
        className="hover:text-purple-700 cursor-pointer"
        onClick={onClearCompleted}
      >
        Clear Completed
      </div>
    </div>
  );
};
