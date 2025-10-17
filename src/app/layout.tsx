// 📁 src/app/layout.tsx
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Fast Food Café",
  description: "Fresh • Fast • Tasty — Fast Food Café"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#071724] via-[#062a33] to-[#041921] text-slate-100">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-10 min-h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
