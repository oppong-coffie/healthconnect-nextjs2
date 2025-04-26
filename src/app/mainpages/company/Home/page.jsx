'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }, []);

  const modules = [
    {
      title: "Hospital Network",
      features: "Manage appointments, patient records, referrals.",
      bg: "bg-blue-50",
      color: "text-blue-600 border-blue-500",
    },
    {
      title: "Pharmacy Integration",
      features: "Inventory, e-prescriptions, drug verification.",
      bg: "bg-green-50",
      color: "text-green-600 border-green-500",
    },
    {
      title: "Medical Transport",
      features: "Emergency routing, patient transfers, GPS tracking.",
      bg: "bg-yellow-50",
      color: "text-yellow-600 border-yellow-500",
    },
  ];

  const benefits = [
    {
      title: "📊 Efficiency",
      color: "text-blue-600",
      border: "border-r-4 border-blue-500",
    },
    {
      title: "💡 AI Insights",
      color: "text-green-600",
      border: "border-r-4 border-green-500",
    },
    {
      title: "⚡ Emergency Response",
      color: "text-red-600",
      border: "border-r-4 border-red-500",
    },
    {
      title: "🔒 Data Security",
      color: "text-indigo-600",
      border: "border-r-4 border-indigo-500",
    },
    {
      title: "📅 Scheduling",
      color: "text-yellow-600",
      border: "border-r-4 border-yellow-500",
    },
    { title: "🛒 Inventory", color: "text-purple-600" },
  ];

  return (
<>
  {/* START:: Hero Section with Video Background */}
  <section className="relative w-full h-[100vh] overflow-hidden">
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/back.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl"
      >
        🏥 HealthConnect System
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-200 text-lg mt-5 max-w-2xl"
      >
        A smart healthcare ecosystem integrating hospitals, pharmacies, and transport for seamless medical services.
      </motion.p>
    </div>
  </section>
    {/* END:: Hero Section with Video Background */}


  {/* START:: Feature Modules */}
  <section className="bg-gray-50 py-20 px-6 md:px-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-snug">
          Unified Healthcare Systems for Seamless Patient Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-5 shadow-xl border-l-4 ${module.color} ${module.bg}`}
            >
              <h3 className={`text-xl font-semibold ${module.color}`}>
                {module.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{module.features}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/doc2.png"
          alt="Doctor illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
          width={450}
          height={450}
        />
      </div>
    </div>
  </section>
    {/* END:: Feature Modules */}


{/* START:: Redesigned Benefits Section */}
<section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Why Choose <span className="text-blue-600">HealthConnect</span>?
      </h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Transforming healthcare delivery with innovative and patient-centered digital solutions.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
        >
          {/* Icon Circle */}
          <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-blue-100">
            <span className="text-2xl">{benefit.icon || "✨"}</span>
          </div>

          <h3 className={`text-lg font-semibold text-gray-800 group-hover:text-blue-600 ${benefit.color}`}>
            {benefit.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {benefit.description || "Improving outcomes through digital-first solutions that are scalable, secure, and patient-focused."}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* END:: Redesigned Benefits Section */}

</>

  );
}
