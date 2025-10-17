// 📁 src/app/cart/page.tsx
"use client";
import { MENU } from "../../lib/data";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";

export default function CartPage() {
  // simple demo: show sample items in cart layout (you can connect real cart later)
  const [items, setItems] = useState(MENU.slice(0, 3)); // demo items
  const total = items.reduce((s, it) => s + it.price, 0);

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6">Your Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {items.map(it => (
            <div key={it.id} className="card p-4 flex items-center gap-4">
              <img src={it.img} alt={it.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-slate-300">{it.desc}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{it.price} PKR</div>
              </div>
            </div>
          ))}
        </div>

        <aside className="card p-6">
          <div className="text-slate-300">Order Summary</div>
          <div className="mt-4 flex items-center justify-between">
            <div className="font-semibold">Subtotal</div>
            <div className="font-bold">{total} PKR</div>
          </div>
          <div className="mt-4">
            <button className="btn-accent w-full font-bold">Proceed to Checkout</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
