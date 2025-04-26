"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const company = [
  {
    label: "🏢 About Starinx",
    page: "about",
    description: "Learn about our journey, vision, and what sets us apart.",
  },
  {
    label: "📄 Teams",
    page: "teams",
    description: "Meet the passionate minds driving our success.",
  },
  {
    label: "📞 Contact",
    page: "contact",
    description: "Get in touch with us for partnerships or support.",
  },
  {
    label: "🤝 Partnership",
    page: "partnership",
    description: "Grow with us as a strategic partner.",
  },
  {
    label: "🤝 Testimonial",
    page: "testimonial",
    description: "Hear from our happy clients and discover the impact we've made together.",
  },
  {
    label: "🤝 Services",
    page: "services",
    description: "Explore our tailored solutions designed to help your business thrive.",
  }  
];

const services = [
  {
    label: "🏥 Hospital",
    link: "/hospital",
    description:
      "Comprehensive in-patient and out-patient care for all health needs.",
  },
  {
    label: "💊 Pharmacy",
    link: "/pharmacy",
    description:
      "A wide range of prescription medicines, wellness products, and expert advice.",
  },
  {
    label: "🚑 Transport",
    link: "/transport",
    description:
      "Reliable medical transport and emergency response services 24/7.",
  },
];

const blog = [
  {
    label: "📰 Latest News",
    page: "latestnews",
    description: "Stay up to date with recent happenings and updates.",
  },
  {
    label: "✍️ Articles",
    page: "articles",
    description: "In-depth insights, opinions, and stories from our team.",
  },
  {
    label: "📢 Announcements",
    page: "announcements",
    description: "Official statements, partnerships, and special updates.",
  },
];

const Navbar = ({ onNavigate }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleHover = (menu) => {
    setOpenMenu(menu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-3 flex justify-around items-center">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />

        <div className="hidden md:flex items-center space-x-8">
          <span
            onMouseEnter={() => handleHover("company")}
            onMouseLeave={() => handleHover(null)}
            className="cursor-pointer text-lg font-medium hover:text-blue-600 transition"
          >
            Company ⬇️
          </span>

          <span
            onMouseEnter={() => handleHover("services")}
            onMouseLeave={() => handleHover(null)}
            className="cursor-pointer text-lg font-medium hover:text-green-600 transition"
          >
            Services ⬇️
          </span>

          <span
            onMouseEnter={() => handleHover("blog")}
            onMouseLeave={() => handleHover(null)}
            className="cursor-pointer text-lg font-medium hover:text-purple-600 transition"
          >
            Blog ⬇️
          </span>
        </div>

        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </nav>

      <div className="mt-8 bg-gray-900">
        <AnimatePresence>
          {openMenu === "company" && (
            <motion.div
              key="company"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white/90 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-xl w-[85%] mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              onMouseEnter={() => handleHover("company")}
              onMouseLeave={() => handleHover(null)}
            >
              {company.map((item, index) => (
                <Link
                  href={`/mainpages/company/${item.page}`}
                  key={index}
                  onClick={() => setOpenMenu(null)}
                >
                  <div className="group p-5 bg-white rounded-2xl shadow hover:shadow-md hover:scale-[1.03] transition-all duration-300 border border-gray-200 cursor-pointer">
                    <h4 className="text-lg font-semibold text-blue-800 group-hover:text-blue-900">
                      {item.label}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}

          {openMenu === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white/90 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-xl w-[85%] mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              onMouseEnter={() => handleHover("services")}
              onMouseLeave={() => handleHover(null)}
            >
              {services.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="group p-5 bg-white rounded-2xl shadow hover:shadow-md hover:scale-[1.03] transition-all duration-300 border border-gray-200 cursor-pointer">
                    <h4 className="text-lg font-semibold text-green-800 group-hover:text-green-900">
                      {item.label}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}

          {openMenu === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white/90 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-xl w-[85%] mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              onMouseEnter={() => handleHover("blog")}
              onMouseLeave={() => handleHover(null)}
            >
              {blog.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onNavigate(item.page);
                    setOpenMenu(null);
                  }}
                  className="group p-5 bg-white rounded-2xl shadow hover:shadow-md hover:scale-[1.03] transition-all duration-300 border border-gray-200 cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-900">
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
