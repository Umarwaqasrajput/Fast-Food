// 📁 src/components/ProductCard.tsx
"use client";
import { motion } from "framer-motion";
import { MenuItem } from "../lib/data";

export default function ProductCard({ item, onBuy }: { item: MenuItem; onBuy?: (id: string)=>void }) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.02 }} className="card overflow-hidden">
      <div className="relative h-44">
        {item.img ? <img src={item.img} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-400">{item.name}</div>}
        <div className="absolute top-3 left-3 bg-white/6 px-3 py-1 rounded-full text-sm">{item.category}</div>
      </div>

      <div className="p-4 flex flex-col h-40">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-50">{item.name}</h3>
          <p className="text-sm text-slate-300 mt-2">{item.desc}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-extrabold" style={{ color: "#06b6a4" }}>{item.price} PKR</div>
            <div className="text-xs text-slate-400">Inclusive of taxes</div>
          </div>

          <button onClick={() => onBuy?.(item.id)} className="btn-accent px-4 py-2 rounded-full font-bold">BUY</button>
        </div>
      </div>
    </motion.div>
  );
}
