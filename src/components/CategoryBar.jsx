export default function CategoryBar({ categories, active, onSelect }) {
  return (
    <div className="sticky top-14 z-30 flex items-center gap-3 overflow-x-auto whitespace-nowrap bg-white px-4 py-3 transition-colors duration-200 no-scrollbar sm:px-6 dark:bg-[#0f0f0f]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
