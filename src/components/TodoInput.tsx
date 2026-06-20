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
    <div className="flex items-center rounded-md bg-white p-4 gap-2 shadow-xl shadow-slate-200/70 dark:bg-slate-900 dark:shadow-black/20 w-full">
      <div className="rounded-full w-6 h-6 border-2 border-slate-300 dark:border-slate-600"></div>
      <form action={createTodo}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo..."
          className="bg-transparent text-slate-600 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
        />
      </form>
    </div>
  );
};
