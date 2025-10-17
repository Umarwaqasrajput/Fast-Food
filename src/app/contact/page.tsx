// 📁 src/app/contact/page.tsx
"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section className="max-w-3xl mx-auto px-6 py-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl font-extrabold mb-4 text-yellow-300">Contact Us</h1>

      <form className="bg-[#0f0f0f] p-6 rounded-xl border border-yellow-900/10 shadow-sm space-y-4">
        <div>
          <label className="text-sm text-gray-300">Name</label>
          <input className="mt-2 w-full p-3 rounded-lg bg-[#121212] text-white outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
        </div>

        <div>
          <label className="text-sm text-gray-300">Phone</label>
          <input className="mt-2 w-full p-3 rounded-lg bg-[#121212] text-white outline-none focus:ring-2 focus:ring-yellow-400" placeholder="+92 3xx xxxxxxx" />
        </div>

        <div>
          <label className="text-sm text-gray-300">Message</label>
          <textarea className="mt-2 w-full p-3 rounded-lg bg-[#121212] text-white outline-none focus:ring-2 focus:ring-yellow-400" rows={5} placeholder="How can we help?" />
        </div>

        <button type="submit" className="w-full btn-primary text-black font-semibold">Send Message</button>
      </form>

      <div className="mt-6 text-gray-400 text-sm">
        <p>Address: 123 Food Street, Your City</p>
        <p>Phone: +92 300 119 6030</p>
        <p>WhatsApp: <a className="text-yellow-300" href="https://wa.me/923001196030" target="_blank">Chat on WhatsApp</a></p>
      </div>
    </motion.section>
  );
}
