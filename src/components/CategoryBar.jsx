export default function CategoryBar({ categories, active, onSelect }) {
  return (
    <div className="sticky top-14 z-30 flex items-center gap-3 overflow-x-auto whitespace-nowrap bg-white px-4 py-3 no-scrollbar sm:px-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
