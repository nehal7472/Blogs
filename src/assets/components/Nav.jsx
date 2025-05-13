export default function Nav({ toggleDarkMode, isDark }) {
  return (
    <>
      <div className="h-[120px] flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Simple Blog
        </h1>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-2 text-sm rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-md transition"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Logo */}
          <img
            className="w-[50px] rounded-full border border-gray-300 dark:border-gray-600"
            src="nav-pic.png"
            alt="Nav Pic"
          />
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700" />
    </>
  );
}
