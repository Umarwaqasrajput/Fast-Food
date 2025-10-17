// 📁 src/app/about/page.tsx
"use client";  // 👈 یہ لائن سب سے اوپر ہونی چاہیے

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 12 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <h2 className="text-2xl font-extrabold text-white">About Fast Food Café</h2>
          <p className="text-slate-300 mt-4">
            Fast Food Café began with a simple idea: craft delicious fast food that doesn't compromise on quality.
            We source fresh ingredients, use carefully designed recipes, and ensure fast delivery.
          </p>

          <div className="mt-6 space-y-3 text-slate-300">
            <p><strong>Our Mission:</strong> Serve every customer a memorable, tasty meal.</p>
            <p><strong>Quality:</strong> Fresh ingredients & hygiene first.</p>
            <p><strong>Speed:</strong> Quick order processing & delivery.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Our Kitchen</h3>
            <p className="text-slate-300 mt-2">
              Modern equipment, trained staff and a focus on taste consistency.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-lg">Careers</h3>
            <p className="text-slate-300 mt-2">
              Join our team — cooks, delivery, and front-desk roles available.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
