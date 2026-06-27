type TodoFilterProps = {
  onFilterChange: (filter: "all" | "active" | "completed") => void;
};

export const TodoFilter = ({ onFilterChange }: TodoFilterProps) => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-center gap-4 bg-gray-50 py-4 text-sm text-purple-600 dark:bg-navy-900 dark:text-purple-600">
      <p
        className={"font-bold text-blue-500"}
        onClick={() => onFilterChange("all")}
      >
        All
      </p>
      <p
        className={"font-bold text-gray-600 hover:text-navy-850 dark:hover:text-purple-100"}
        onClick={() => onFilterChange("active")}
      >
        Active
      </p>
      <p
        className={"font-bold text-gray-600 hover:text-navy-850 dark:hover:text-purple-100"}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </p>
    </div>
  );
};
