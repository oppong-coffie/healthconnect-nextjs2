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
    description:
      "Hear from our happy clients and discover the impact we've made together.",
  },
  {
    label: "🤝 Services",
    page: "services",
    description:
      "Explore our tailored solutions designed to help your business thrive.",
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

const products = [
  {
    label: "📰 Cedifi",
    page: "cedify",
    description: "Stay up to date with recent happenings and updates.",
    children: [
      {
        label: "👜 Enki Wallet",
        page: "cedifi/enkiwallet",
        description: "Manage your crypto with Enki Wallet.",
      },
      {
        label: "💠 NFTs",
        page: "cedify/nfts",
        description: "Explore unique digital assets.",
      },
      {
        label: "💠 Defi Platform",
        page: "cedifi/defi",
        description: "Explore DeFi investment tools.",
      },
      {
        label: "🎮 Play-to-earn Gaming",
        page: "cedify/game",
        description: "Earn while you play.",
      },
      {
        label: "🌐 Decentralised Social Media",
        page: "cedifi/socialmedia",
        description: "A new era of connected privacy.",
      },
    ],
  },
  {
    label: "🏥 HealthConnect",
    page: "healthconnect",
    description: "Revolutionize your health experience.",
    children: [
      {
        label: "🏥 Hospital",
        page: "hospitalmanagement",
        description:
          "Comprehensive in-patient and out-patient care for all health needs.",
      },
      {
        label: "💊 Pharmacy",
        page: "pharmacy",
        description:
          "A wide range of prescription medicines, wellness products, and expert advice.",
      },
      {
        label: "🚑 Transport",
        page: "transport",
        description:
          "Reliable medical transport and emergency response services 24/7.",
      },
    ],
  },
];

const Navbar = ({ onNavigate }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProduct = (index) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

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

{/* START::Displayed Menu List */}
        <div className="hidden md:flex items-center space-x-8">
          <span
            onMouseEnter={() => handleHover("company")}
            onMouseLeave={() => handleHover(null)}
            className="cursor-pointer text-lg font-medium hover:text-blue-600 transition"
          >
            Company ⬇️
          </span>

      
          <Link
                  href={`/mainpages/research`}
                  onClick={() => setOpenMenu(null)}
                >
          <span
            className="cursor-pointer text-lg font-medium hover:text-purple-600 transition"
          >
            Research ⬇️
          </span>
          </Link>
          <Link
                  href={`/mainpages/industries`}
                  onClick={() => setOpenMenu(null)}
                >
          <span
            className="cursor-pointer text-lg font-medium hover:text-purple-600 transition"
          >
            Industries ⬇️
          </span>
          </Link>
          <Link
                  href={`/mainpages/starinxnews`}
                  onClick={() => setOpenMenu(null)}
                >
          <span
            className="cursor-pointer text-lg font-medium hover:text-purple-600 transition"
          >
            StarinxNews ⬇️
          </span>
          </Link>
          <span
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => handleHover(null)}
            className="cursor-pointer text-lg font-medium hover:text-purple-600 transition"
          >
            Products ⬇️
          </span>
        </div>
{/* END::Displayed Menu List */}


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

       

      

          {openMenu === "products" && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white/90 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-xl w-[85%] mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
              onMouseEnter={() => handleHover("products")}
              onMouseLeave={() => handleHover(null)}
            >
              {products.map((product, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border shadow-md"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleProduct(i)}
                  >
                    <h4 className="text-lg font-semibold text-purple-800 hover:text-purple-900">
                      {product.label}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {product.description}
                    </p>
                  </div>

                  {expandedProduct === i && product.children && (
                    <div className="mt-4 pl-4 border-l border-purple-200 space-y-3">
                      {product.children.map((child, j) => (
                        <Link
                          key={j}
                          href={`/mainpages/products/${child.page}`}
                          onClick={() => {
                            setOpenMenu(null);
                            setExpandedProduct(null);
                          }}
                        >
                          <div className="group cursor-pointer">
                            <h5 className="text-sm font-medium text-purple-700 group-hover:text-purple-900">
                              {child.label}
                            </h5>
                            <p className="text-xs text-gray-500">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
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
