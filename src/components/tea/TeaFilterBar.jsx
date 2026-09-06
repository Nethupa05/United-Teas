import { categories } from "../../data/teas";

export default function TeaFilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 border-b border-forest/10 pb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 text-sm transition-colors border ${
            active === cat
              ? "bg-forest-dark text-ivory border-forest-dark"
              : "border-forest/20 text-forest-dark hover:border-gold hover:text-gold"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
