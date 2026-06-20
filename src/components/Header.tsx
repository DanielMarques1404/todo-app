export const Header = () => {
  return (
    <header className="flex flex-col items-start justify-between w-full bg-[url('/assets/images/bg-mobile-light.jpg')] bg-cover bg-center bg-no-repeat p-6 shadow-xl shadow-slate-200/70 dark:bg-[url('/assets/images/bg-desktop-dark.jpg')] dark:shadow-black/20 h-52">
      <h1 className="text-4xl font-bold uppercase tracking-[0.35em]">Todo</h1>
    </header>
  );
};
