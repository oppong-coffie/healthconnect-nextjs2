'use client'
import { useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamic import with fallback for Marquee
const Marquee = dynamic(
  () => import('react-fast-marquee'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex overflow-x-auto py-4 gap-4">
        {brands.map((brand) => (
          <BrandButton 
            key={brand.name}
            brand={brand}
            activeTab={activeTab}
            onClick={() => setActiveTab(brand.name)}
          />
        ))}
      </div>
    )
  }
);

// Brand button component for reusability
const BrandButton = ({ brand, activeTab, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 mx-4 rounded-full px-6 py-3 text-base font-semibold transition-colors min-w-max ${
      activeTab === brand.name
        ? "bg-sky-600 text-white"
        : "bg-sky-100 text-gray-800"
    }`}
  >
    <Image 
      src={brand.logo} 
      alt={brand.name} 
      width={30} 
      height={30}
      className="rounded-full"
    />
    <span className="whitespace-nowrap">{brand.name}</span>
  </button>
);

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("Visa Verifi");
  
  const tabData = {
    "Visa Verifi": {
      title: "Empowering Solutions Through Visa Verifi",
      description: "Visa Verifi helps businesses resolve disputes and reduce fraud efficiently through advanced tools.",
      image: "/images/r3.jpg",
    },
    "Mastercard Ethoca": {
      title: "Mastercard Ethoca Collaboration",
      description: "Ethoca provides real-time fraud and dispute resolution, enhancing customer satisfaction.",
      image: "/images/r4.jpg",
    },
    "Mastercard Acquirer Collaboration": {
      title: "Acquirer Collaboration",
      description: "Mastercard Acquirer Collaboration enables seamless communication between issuers and acquirers.",
      image: "/images/r5.jpg",
    },
    "Authorize.net": {
      title: "Authorize.net Integration",
      description: "We integrate Authorize.net to process payments securely and manage chargebacks effectively.",
      image: "/images/r6.jpg",
    },
    "NMI": {
      title: "NMI Partnership",
      description: "NMI supports our operations with a flexible, scalable payment infrastructure.",
      image: "/images/r7.png",
    },
    "CheckoutChamp": {
      title: "CheckoutChamp Support",
      description: "CheckoutChamp enables faster, high-converting checkout experiences while keeping disputes in check.",
      image: "/images/r2.jpg",
    },
  };

  const brands = [
    { name: "Visa Verifi", logo: "/images/r9.jpg" },
    { name: "Authorize.net", logo: "/images/r9.jpg" },
    { name: "NMI", logo: "/images/r9.jpg" },
    { name: "CheckoutChamp", logo: "/images/r9.jpg" },
    { name: "Mastercard Ethoca", logo: "/images/r9.jpg" },
    { name: "Mastercard Acquirer Collaboration", logo: "/images/r9.jpg" },
  ];

  return (
    <>
      {/* Research Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Headline */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-medium leading-relaxed">
              At <span className="text-black font-semibold">Starinx</span>, <br />
              <span className="text-gray-400">research drives our innovation</span><br />
              in dispute resolution and payment fraud management. <br />
              Discover how we help businesses <span className="text-black font-semibold">learn</span>, <span className="text-black font-semibold">know</span>, and <span className="text-black font-semibold">manage</span> with <span className="text-sky-600 font-semibold">Starinx</span>.
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-sm text-left min-h-[280px]">
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics in Fraud Prevention</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Our research explores how machine learning models can anticipate fraudulent behavior before it happens. By analyzing transaction patterns, we identify potential threats and intervene early, reducing both risk and operational costs for businesses.
              </p>
            </div>

            {/* Card 2 - With hover text */}
            <div className="bg-white rounded-xl shadow-sm min-h-[280px] overflow-hidden relative group">
              <Image
                src="/images/r1.webp"
                alt="AI technology visualization"
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  AI-driven technologies powering dispute resolution.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm text-left min-h-[280px]">
              <h3 className="text-xl font-semibold mb-2">Behavioral Biometrics for Transaction Security</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We're investigating behavioral biometrics—like typing speed and mouse movement—as a second layer of user authentication. This innovative approach adds a non-intrusive security layer, making online payments more secure without compromising user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-medium leading-relaxed">
              <span className="text-black font-semibold">Research That Powers Progress</span><br />
              <span className="text-gray-400">At Starinx, innovation begins with insight.</span><br />
              Our research shapes the future of dispute resolution<br />
              and payment fraud management — turning data into action.
            </h1>
          </div>

          {/* Brand Marquee */}
          <div className="overflow-hidden">
            <Marquee gradient={false} speed={40} className="py-4">
              {brands.map((brand) => (
                <BrandButton 
                  key={brand.name}
                  brand={brand}
                  activeTab={activeTab}
                  onClick={() => setActiveTab(brand.name)}
                />
              ))}
            </Marquee>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Text */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-bold leading-snug text-gray-900">
                {tabData[activeTab].title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {tabData[activeTab].description}
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2">
              <Image
                src={tabData[activeTab].image}
                alt={tabData[activeTab].title}
                width={500}
                height={350}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-sky-600 text-white mt-20 rounded-xl max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-2">Explore our insights and findings</h3>
        <p className="mb-4">See how our partnerships directly inform fraud prevention strategies across industries.</p>
        <button className="bg-white text-sky-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </>
  );
}