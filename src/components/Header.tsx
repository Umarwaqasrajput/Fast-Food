// 📂 src/components/
// 📄 Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#03343a] to-[#042b2d] flex items-center justify-center text-white font-extrabold shadow">FF</div>
        <div>
          <div className="text-lg font-bold">Fast Food Café</div>
          <div className="text-xs text-slate-300">Fresh • Fast • Tasty</div>
        </div>
      </Link>

      <nav className="flex items-center gap-3">
        <Link href="/menu" className="px-3 py-1 rounded-full hover:bg-white/5 transition">Menu</Link>
        <Link href="/about" className="px-3 py-1 rounded-full hover:bg-white/5 transition">About</Link>
        <Link href="/contact" className="px-3 py-1 rounded-full hover:bg-white/5 transition">Contact</Link>
        <Link href="/cart" className="btn-accent">Cart</Link>
      </nav>
    </header>
  );
}
