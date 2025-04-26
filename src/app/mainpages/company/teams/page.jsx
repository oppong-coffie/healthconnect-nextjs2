'use client';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa6';

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: 'Product Development',
      tagline: 'Turning ideas into reality',
      description:
        'Responsible for architecting, building, and iterating on the platform’s core functionality, ensuring performance and scalability.',
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      members: [
        {
          name: 'Kwame Mensah',
          role: 'Tech Lead',
          avatar: '/images/teams/kwame.jpg',
          socials: {
            linkedin: '#',
            twitter: '#',
            email: 'mailto:kwame@example.com',
          },
        },
        {
          name: 'Esi Arko',
          role: 'Backend Dev',
          avatar: '/images/teams/esi.jpeg',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:esi@example.com' },
        },
        {
          name: 'Kojo Boadi',
          role: 'Frontend Dev',
          avatar: '/images/teams/kojo.avif',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:kojo@example.com' },
        },
      ],
    },
    {
      id: 2,
      name: 'Design & UX',
      tagline: 'Where aesthetics meet function',
      description:
        'Crafts pixel‑perfect interfaces, conducts user research, and ensures accessibility across all experiences.',
      color: 'from-teal-500 via-emerald-500 to-lime-500',
      members: [
        {
          name: 'Afua Danso',
          role: 'Lead Designer',
          avatar: '/images/teams/afua.jpeg',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:afua@example.com' },
        },
        {
          name: 'Yaw Sackey',
          role: 'UX Researcher',
          avatar: '/images/teams/yaw.jpg',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:yaw@example.com' },
        },
      ],
    },
    {
      id: 3,
      name: 'Marketing',
      tagline: 'Amplifying our narrative',
      description:
        'Transforms product value into compelling stories, manages campaigns, and grows our community.',
      color: 'from-rose-500 via-red-500 to-amber-500',
      members: [
        {
          name: 'Kofi Owusu',
          role: 'Marketing Manager',
          avatar: '/images/teams/yaw2.webp',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:kofi@example.com' },
        },
        {
          name: 'Ama Serwaa',
          role: 'Content Strategist',
          avatar: '/images/teams/ama.jpeg',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:ama@example.com' },
        },
        {
          name: 'Nana Adjei',
          role: 'SEO Specialist',
          avatar: '/images/teams/kwame.jpg',
          socials: { linkedin: '#', twitter: '#', email: 'mailto:nana@example.com' },
        },
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Our Dream Team
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team, idx) => (
          <motion.article
            key={team.id}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl bg-white dark:bg-zinc-900 group"
          >
            {/* Dynamic gradient backdrop */}
            <div
              className={`absolute inset-0 -z-10 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${team.color}`}
            />

            <header className="mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">
                {team.name}
              </h2>
              <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-1">
                {team.tagline}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 max-w-prose">
                {team.description}
              </p>
            </header>

            <ul className="space-y-5">
              {team.members.map((member, mIdx) => (
                <li key={member.name} className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {member.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium leading-none text-gray-900 dark:text-gray-100">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {member.role}
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-lg">
                          <FaLinkedinIn />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} aria-label="Twitter" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-lg">
                          <FaTwitter />
                        </a>
                      )}
                      {member.socials.email && (
                        <a href={member.socials.email} aria-label="Email" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-lg">
                          <FaEnvelope />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
