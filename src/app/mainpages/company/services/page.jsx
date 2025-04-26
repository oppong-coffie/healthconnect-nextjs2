'use client';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaBullhorn, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Full‑Stack Development',
      icon: FaCode,
      color: 'bg-indigo-500',
      description:
        'End‑to‑end application development with scalable architectures, modern frameworks, and cloud‑native deployment.',
      tags: ['React', 'Node.js', 'Laravel', 'AWS'],
    },
    {
      id: 2,
      title: 'UI & Brand Design',
      icon: FaPalette,
      color: 'bg-pink-500',
      description:
        'Pixel‑perfect interfaces and cohesive brand systems that delight users and reinforce identity across platforms.',
      tags: ['Figma', 'Tailwind', 'Accessibility'],
    },
    {
      id: 3,
      title: 'Growth Marketing',
      icon: FaBullhorn,
      color: 'bg-emerald-500',
      description:
        'Data‑driven campaigns, SEO, and community building to amplify reach and convert audiences into loyal customers.',
      tags: ['SEO', 'Content', 'Social'],
    },
    {
      id: 4,
      title: 'Data Analytics',
      icon: FaChartLine,
      color: 'bg-amber-500',
      description:
        'Transform raw data into actionable insights with dashboards, predictive models, and AI‑powered decision support.',
      tags: ['Python', 'Power BI', 'ML'],
    },
    {
      id: 5,
      title: 'Mobile App Development',
      icon: FaMobileAlt,
      color: 'bg-teal-500',
      description:
        'Native and cross‑platform apps with slick performance, offline capability, and delightful interactions.',
      tags: ['React Native', 'Flutter', 'PWA'],
    },
    {
      id: 6,
      title: 'Security & Compliance',
      icon: FaShieldAlt,
      color: 'bg-red-500',
      description:
        'Proactive audits, penetration testing, and policy alignment to safeguard data and maintain industry compliance.',
      tags: ['OWASP', 'ISO 27001', 'GDPR'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Our Services
      </motion.h1>

      <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <motion.article
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/5 p-8 flex flex-col"
            >
              <span className={`absolute -top-8 -right-8 h-32 w-32 rounded-full ${srv.color} blur-3xl opacity-30`} />
              <div className="relative z-10 flex items-center mb-6">
                <div className={`h-14 w-14 flex items-center justify-center rounded-2xl text-white ${srv.color} shadow-lg shrink-0`}>
                  <Icon className="text-2xl" />
                </div>
                <h2 className="ml-4 text-2xl font-semibold">{srv.title}</h2>
              </div>
              <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {srv.description}
              </p>
              <ul className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {srv.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gray-200/60 dark:bg-zinc-700/60 text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
