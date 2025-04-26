'use client';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Working with this team has been a game‑changer. Our deployment pipeline is faster, and customer satisfaction is at an all‑time high.',
      author: 'Felicia Owura‑Afoley',
      role: 'CTO, ApexBank',
      avatar: '/images/teams/ama.jpeg',
      bg: 'from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      id: 2,
      quote:
        'Their keen eye for design transformed our user experience. Sign‑ups jumped 37% after the redesign.',
      author: 'Michael Adjetey',
      role: 'Product Lead, CargoX',
      avatar: '/images/teams/yaw.jpg',
      bg: 'from-teal-500 via-emerald-500 to-lime-500',
    },
    {
      id: 3,
      quote:
        'A brilliant marketing strategy that actually moved the needle—our brand reach doubled in just three months.',
      author: 'Linda Nyarko',
      role: 'CMO, ShopEase',
      avatar: '/images/teams/esi.jpeg',
      bg: 'from-rose-500 via-red-500 to-amber-500',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        What Our Partners Say
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative rounded-3xl p-10 shadow-xl bg-white dark:bg-zinc-900 overflow-hidden"
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-0 -z-10 opacity-15 bg-gradient-to-br ${t.bg}`}
            />

            {/* Quote mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-indigo-500 dark:text-indigo-400 mb-4"
            >
              <path d="M7.17 7a5 5 0 00-.66 9.94H6.5a1 1 0 010 2h-.05A7 7 0 117.17 7zM18.17 7a5 5 0 00-.66 9.94h-.01a1 1 0 010 2h-.05A7 7 0 1118.17 7z" />
            </svg>

            <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-100">
              “{t.quote}”
            </p>

            <footer className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {t.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
