// src/components/MenuCard.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MenuItem } from "../lib/data";

export default function MenuCard({ item, onBuy }: { item: MenuItem; onBuy?: (id:string)=>void }){
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="card-soft p-4 flex flex-col"
    >
      <div className="h-40 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
        {item.img ? <img src={item.img} alt={item.name} className="object-cover h-full w-full" /> : <div className="text-gray-300">{item.name}</div>}
      </div>

      <div className="mt-4 flex-1">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">{item.price} PKR</div>
          <div className="text-xs text-gray-400">Inclusive of taxes</div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={()=>onBuy?.(item.id)}
            className="btn-primary transform hover:scale-105 active:scale-95"
            >
            BUY
          </button>
        </div>
      </div>
    </motion.div>
  );
}
