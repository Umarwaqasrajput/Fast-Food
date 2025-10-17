// 📁 File: src/components/Sidebar.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Menu, Info, Phone, ShoppingCart } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-64 min-h-screen bg-gradient-to-b from-blue-950 via-gray-900 to-black flex flex-col justify-between p-6 shadow-2xl"
    >
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
            FF
          </div>
          <h1 className="text-xl font-bold text-white">Fast Food Café</h1>
        </div>

        <nav className="flex flex-col gap-5 text-gray-300">
          <Link href="/" className="flex items-center gap-3 hover:text-white transition-all">
            <Home size={20} /> Home
          </Link>
          <Link href="/menu" className="flex items-center gap-3 hover:text-white transition-all">
            <Menu size={20} /> Menu
          </Link>
          <Link href="/about" className="flex items-center gap-3 hover:text-white transition-all">
            <Info size={20} /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-3 hover:text-white transition-all">
            <Phone size={20} /> Contact
          </Link>
          <Link href="/cart" className="flex items-center gap-3 hover:text-white transition-all">
            <ShoppingCart size={20} /> Cart
          </Link>
        </nav>
      </div>

      <div className="text-xs text-gray-500 mt-10">© 2025 Fast Food Café</div>
    </motion.aside>
  );
}
