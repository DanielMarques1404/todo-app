import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="flex h-64 w-full items-center justify-center bg-[url('/assets/images/bg-mobile-light.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url('/assets/images/bg-mobile-dark.jpg')] sm:bg-[url('/assets/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/assets/images/bg-desktop-dark.jpg')]">
      <div className="flex flex-1 items-center justify-between max-w-125 mb-24 px-6">
        <h1 className="text-5xl font-bold uppercase leading-none tracking-[0.42em] text-white">
          Todo
        </h1>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="cursor-pointer"
        >
          <img
            src={
              isDark
                ? "/assets/images/icon-sun.svg"
                : "/assets/images/icon-moon.svg"
            }
            alt=""
            className="h-8 w-8"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
};
