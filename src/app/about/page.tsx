"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-6 text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="card p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-4">
            About Fast Food Café
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to <strong>Fast Food Café</strong> — your go-to destination
            for mouth-watering fast food and premium taste. We&apos;re passionate
            about serving delicious burgers, fries, and snacks that make your
            day special.
          </p>
          <p className="mt-4 text-gray-400">
            Our café is designed to provide a cozy, modern, and vibrant
            environment where friends and families can enjoy their favorite
            meals together.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* Picture Frame */}
          <div className="w-72 h-72 rounded-3xl border-4 border-blue-500 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
            Owner Picture Frame (Upload your image here)
          </div>
        </div>
      </div>
    </motion.section>
  );
}
