export const Header = () => {
  return (
    // <header className="flex aspect-375/200 w-full items-start justify-between bg-[url('/assets/images/bg-mobile-light.jpg')] bg-cover bg-center bg-no-repeat px-6 pt-12 dark:bg-[url('/assets/images/bg-mobile-dark.jpg')]">
    <header className="flex bg-[url('/assets/images/bg-mobile-light.jpg')] sm:bg-[url('/assets/images/bg-desktop-light.jpg')] bg-center bg-cover bg-no-repeat h-64 w-full items-center justify-center">
      <div className="flex flex-1 items-center justify-between max-w-125 mb-24 px-6">
        <h1 className="text-5xl font-bold uppercase leading-none tracking-[0.42em] text-white">
          Todo
        </h1>
        <img
          src="/assets/images/icon-moon.svg"
          alt=""
          className="h-8 w-8 dark:hidden"
          aria-hidden="true"
        />
        <img
          src="/assets/images/icon-sun.svg"
          alt=""
          className="hidden h-8 w-8 dark:block"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
