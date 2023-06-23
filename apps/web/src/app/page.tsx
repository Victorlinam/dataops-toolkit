'use client';
import { motion } from 'framer-motion';

const cards = ['Ingestion Engine', 'Workflow Automation', 'Analytics', 'Report Studio'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e1e1e] text-[#f1ebe5] p-10">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-semibold">
        Data Reporting & Automation Toolkit
      </motion.h1>
      <p className="mt-5 max-w-3xl text-[#d6c6b8]">Premium data operations platform for ingestion, ETL orchestration, and automated analytics reporting.</p>
      <section className="grid md:grid-cols-2 gap-6 mt-12">
        {cards.map((c, i) => (
          <motion.article key={c} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-[#2f5d50] bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-2xl">{c}</h2>
            <p className="text-sm text-[#cab8ab] mt-3">Enterprise-grade module with auditability, secure APIs, and automation hooks.</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
