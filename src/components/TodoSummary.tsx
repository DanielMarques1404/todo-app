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
    <div className="flex w-full items-center justify-between border-b border-gray-300 bg-gray-50 p-5 text-sm text-gray-600 dark:border-purple-800 dark:bg-navy-900 dark:text-purple-600">
      <div>
        {`${total - completed} ${total - completed === 1 ? "item" : "items"} left`}
      </div>
      <div className="hidden sm:block">
        <TodoFilter onFilterChange={onFilterChange} />
      </div>
      <div
        className="cursor-pointer hover:text-navy-850 dark:hover:text-purple-100"
        onClick={onClearCompleted}
      >
        Clear Completed
      </div>
    </div>
  );
};
