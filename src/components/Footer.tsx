// 📂 src/components/
// 📄 Footer.tsx
export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Fast Food Café</div>
        <div>Made by Umar Waqas Rajput</div>
      </div>
    </footer>
  );
}
