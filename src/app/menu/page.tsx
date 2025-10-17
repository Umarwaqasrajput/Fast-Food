// 📁 src/app/menu/page.tsx
"use client";
import { useState } from "react";
import { MENU } from "../../lib/data";
import ProductCard from "../../components/ProductCard";

export default function MenuPage() {
  const [filter, setFilter] = useState<string>("All");
  const [cart, setCart] = useState<Record<string, number>>({});

  const categories = ["All", ...Array.from(new Set(MENU.map((m) => m.category)))];
  const filtered = MENU.filter((m) => filter === "All" || m.category === filter);

  function handleBuy(id: string) {
    setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
    // small toast alternative
    alert("Item added to cart");
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-yellow-300">Our Menu</h1>

      <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full ${filter === c ? "bg-yellow-400 text-black" : "bg-white/5 text-white"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} onBuy={handleBuy} />
        ))}
      </div>

      <div className="mt-10 text-center text-gray-300">
        <div className="text-sm">Cart items: <span className="font-semibold text-yellow-300">{Object.values(cart).reduce((a, b) => a + b, 0)}</span></div>
      </div>
    </section>
  );
}
