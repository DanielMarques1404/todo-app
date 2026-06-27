type TodoInputProps = {
  onCreate: (label: string) => void;
};

export const TodoInput = ({ onCreate }: TodoInputProps) => {
  const createTodo = (formData: FormData) => {
    const label = formData.get("todo")?.toString().trim();

    if (!label) return;

    onCreate(label);
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-md bg-gray-50 p-4 shadow-xl shadow-gray-300/70 dark:bg-navy-900 dark:shadow-navy-950/20">
      <div className="h-6 w-6 rounded-full border-2 border-gray-300 dark:border-purple-800"></div>
      <form action={createTodo}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo..."
          className="bg-transparent text-navy-850 placeholder:text-gray-600 focus:outline-none dark:text-purple-300 dark:placeholder:text-purple-600"
        />
      </form>
    </div>
  );
};
