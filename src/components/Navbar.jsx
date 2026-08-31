import { Menu, Search, Mic, Video, Bell, X, Sun, Moon } from "lucide-react";

export default function Navbar({ onMenuClick, searchOpen, setSearchOpen, theme, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between gap-4 bg-white px-2 transition-colors duration-200 sm:px-4 dark:bg-[#0f0f0f]">
      {/* Left: menu + logo */}
      <div className={`flex items-center gap-1 sm:gap-2 ${searchOpen ? "hidden sm:flex" : "flex"}`}>
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
        >
          <Menu size={22} className="text-gray-900 dark:text-white" />
        </button>
        <a href="#" className="flex items-center gap-1 pl-1">
          <svg viewBox="0 0 90 20" className="h-5 w-auto sm:h-[18px]" aria-label="YouTube">
            <g>
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C-1.44277e-06 5.35042 0 10 0 10C0 10 -1.44277e-06 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="#FF0000"
              />
              <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
            </g>
          </svg>
          <span className="hidden text-xl tracking-tight text-gray-900 sm:inline dark:text-white">YouTube</span>
          <span className="hidden self-start text-[10px] text-gray-500 sm:inline dark:text-gray-400">NG</span>
        </a>
      </div>

      {/* Center: search */}
      <div
        className={`${
          searchOpen ? "flex" : "hidden md:flex"
        } max-w-[720px] flex-1 items-center justify-center gap-4 px-2 sm:px-0`}
      >
        {searchOpen && (
          <button
            onClick={() => setSearchOpen(false)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-gray-100 sm:hidden dark:hover:bg-white/10"
            aria-label="Close search"
          >
            <X size={20} className="text-gray-900 dark:text-white" />
          </button>
        )}
        <div className="flex w-full flex-1 items-center">
          <div className="flex h-10 flex-1 items-center rounded-l-full border border-gray-300 pl-4 focus-within:border-blue-500 focus-within:shadow-inner dark:border-gray-700 dark:bg-[#121212]">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
            />
          </div>
          <button
            aria-label="Search"
            className="flex h-10 w-16 flex-shrink-0 items-center justify-center rounded-r-full border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-[#222222] dark:hover:bg-[#2c2c2c]"
          >
            <Search size={20} className="text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <button
          aria-label="Search with voice"
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 sm:flex dark:bg-[#222222] dark:hover:bg-[#2c2c2c]"
        >
          <Mic size={20} className="text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Right: actions */}
      <div className={`flex flex-shrink-0 items-center gap-1 sm:gap-2 ${searchOpen ? "hidden sm:flex" : "flex"}`}>
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 md:hidden dark:hover:bg-white/10"
        >
          <Search size={22} className="text-gray-900 dark:text-white" />
        </button>
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
        >
          {theme === "dark" ? (
            <Sun size={22} className="text-white" />
          ) : (
            <Moon size={22} className="text-gray-900" />
          )}
        </button>
        <button
          aria-label="Create"
          className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex dark:hover:bg-white/10"
        >
          <Video size={22} className="text-gray-900 dark:text-white" />
        </button>
        <button
          aria-label="Notifications"
          className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex dark:hover:bg-white/10"
        >
          <Bell size={22} className="text-gray-900 dark:text-white" />
        </button>
        <button
          aria-label="Account"
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-semibold text-white"
        >
          F
        </button>
      </div>
    </header>
  );
}
