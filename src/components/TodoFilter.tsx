type TodoFilterProps = {
  onFilterChange: (filter: "all" | "active" | "completed") => void;
};

export const TodoFilter = ({ onFilterChange }: TodoFilterProps) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-white py-4 dark:bg-slate-900 w-full cursor-pointer text-sm text-purple-600 dark:text-slate-400">
      <p
        className={"font-bold text-blue-500"}
        onClick={() => onFilterChange("all")}
      >
        All
      </p>
      <p
        className={"font-bold text-gray-600 hover:text-purple-700"}
        onClick={() => onFilterChange("active")}
      >
        Active
      </p>
      <p
        className={"font-bold text-gray-600 hover:text-purple-700"}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </p>
    </div>
  );
};
