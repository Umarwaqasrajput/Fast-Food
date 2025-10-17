// 📂 src/app/shop/
// 📄 page.tsx
"use client";
import { MENU } from "../../lib/data";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        🍟 Our <span className="text-[#ff6b3a]">Menu</span>
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {MENU.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
