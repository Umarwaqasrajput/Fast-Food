// 📁 src/app/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* LEFT: Intro + Owner frame */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          Taste the <span className="bg-clip-text text-transparent" style={{ background: "linear-gradient(90deg,#06b6a4,#ff6b6b)" }}>Split Flavor</span>
        </h1>

        <p className="text-slate-300 max-w-xl">
          Fast Food Cafe brings you fres hot and flavourful meals made with care.
          From hand pressed patties to oven-fresh pizzas and crunchy sides  every bite is crafted to delight.
        </p>

        <div className="flex items-center gap-6 mt-4">
          {/* Owner photo frame (you will replace /owner.jpg with your uploaded image) */}
          <div className="owner-frame">
            <img src="/um.jpg" alt="Owner" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div>
            <div className="font-semibold text-lg">Umar Waqas Rajput</div>
            <div className="text-sm text-slate-300">Founder & Chef  Fast Food Café</div>
            <p className="mt-3 text-slate-300 max-w-md">
              I started Fast Food Cafe to bring bold flavors and fast delivery together. We focus on quality ingredients and quick service.
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <Link href="/menu" className="btn-accent">Order Now</Link>
          <Link href="/about" className="px-4 py-2 rounded-full border border-white/6">Learn More</Link>
        </div>
      </motion.div>

      {/* RIGHT: Feature cards / images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold text-lg">Hot & Fresh</h3>
            <p className="text-slate-300 text-sm mt-2">Prepared to order delivered piping hot.</p>
          </div>

          <div className="card p-4">
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-slate-300 text-sm mt-2">Quick dispatch and careful packaging.</p>
          </div>
        </div>

        <div className="card p-4">
          <h3 className="font-semibold text-lg">Chefs Special</h3>
          <p className="text-slate-300 text-sm mt-2">Signature burgers and limited time combos.</p>
          <div className="mt-4">
            <img src="/cc.jpg" alt="Chef special" className="w-full rounded-md object-cover h-100" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
