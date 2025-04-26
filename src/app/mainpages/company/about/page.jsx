import React from "react";
import Image from "next/image";
import { Check, Headset } from "lucide-react";

const Page = () => {
  const services = [
    {
      title: "Hardware Development 🔧",
      description: "We design and build custom hardware solutions tailored to your business needs.",
      image: "/images/services/hardware.webp",
    },
    {
      title: "Artificial Intelligence 🤖",
      description: "Smart AI systems that learn, predict, and adapt to complex environments.",
      image: "/images/services/ai.webp",
    },
    {
      title: "Internet of Things (IoT) 🌐",
      description: "Connect devices, collect data, and automate processes seamlessly.",
      image: "/images/services/iot.png",
    },
    {
      title: "Computer Vision 👁️",
      description: "Visual recognition systems for smarter automation and real-time decision-making.",
      image: "/images/services/cv.webp",
    },
    {
      title: "Mobile & Web Apps 📱💻",
      description: "Powerful and responsive apps for any platform—crafted with precision.",
      image: "/images/services/app.jpg",
    },
    {
      title: "Virtual Reality (VR) 🎮",
      description: "Immersive experiences that entertain, train, and educate like never before.",
      image: "/images/services/virtual.jpg",
    },
    {
      title: "Cybersecurity 🔒",
      description: "Advanced security strategies to protect your data and systems 24/7.",
      image: "/images/services/cyber.png",
    },
    {
      title: "Embedded Systems 💡",
      description: "Smart microcontrollers and embedded tech for smarter devices.",
      image: "/images/services/emb.jpeg",
    },
    {
      title: "Networking 🧵",
      description: "Reliable and scalable networking solutions for enterprise and home.",
      image: "/images/services/network.jpeg",
    },
  
  ];
  
  return (
    <section className="p-6 md:p-12 space-y-16">
   <section className="p-6 md:p-10 bg-gray-50">
      <div className="lg:flex gap-10 items-start max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-blue-500 text-xl font-semibold uppercase">About Us 💼</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Empowering Innovation With Cutting-Edge Tech Solutions 🚀
            </h1>
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              At <strong>StarinX Inc.</strong>, we're not just riding the wave of innovation — 🌊 we're creating it.
              Whether you're a business ready to transform your industry 🔄 or a tech lover seeking the next big thing 🧠, we're your go-to team!
            </p>
        
            <p>
              Since launching in <strong>2022</strong>, we’ve grown into a tech powerhouse ⚡ by combining passion, talent, and relentless curiosity.
              Our team of expert engineers, creative designers, and code magicians are turning dreams into digital realities.
            </p>
            <p>
              🛠️ From crafting smart devices 🕹️ and wearables ⌚ to designing immersive virtual worlds 🕶️ and smarter AI engines,
              we’re shaping the future—one innovation at a time.
            </p>
          </div>
          

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-medium text-gray-800 pt-6">
            {[
              { label: "🏆 Award Winning", icon: <Check className="text-green-500 mt-1" /> },
              { label: "👨‍💼 Professional Staff", icon: <Check className="text-green-500 mt-1" /> },
              { label: "🕐 24/7 Support", icon: <Check className="text-green-500 mt-1" /> },
              { label: "💰 Fair Prices", icon: <Check className="text-green-500 mt-1" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="pt-6 space-y-2 text-lg">
            <div className="flex items-center gap-3">
              <Headset className="text-blue-500" />
              <span>📞 Call to ask any question:</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-700">+233 551 091 265</h3>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 flex flex-col gap-6">
          <Image
            src="/company.jpg"
            alt="Our Tech Lab"
            className="rounded-3xl shadow-xl w-full object-cover"
            width={450}
            height={500}
          />
          <Image
            src="/images/innovation.jpg" // <-- Suggest using an image that shows futuristic tech, teamwork, or AI
            alt="Innovation in Action"
            className="w-full object-cover"
            width={450}
            height={500}
          />
        </div>
      </div>
    </section>

    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-blue-500 text-xl font-semibold uppercase">What We Do</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Explore Our Core Expertise 🚀
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          From hardware to the metaverse, we blend innovation and precision to build the future of technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="h-48 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* Team Section */}
      <div className="text-center space-y-6">
        <h2 className="text-blue-500 text-xl font-semibold uppercase">Team Members</h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          Professionals Ready to Support Your Business
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {[
            {
              name: "Arnav Ghosh",
              title: "Fullstack Developer",
              image: "/Arnav-Ghosh.jpg",
            },
            {
              name: "Okyere Nana Kofi",
              title: "Project Manager",
              image: "/pm.jpg",
            },
            {
              name: "Harriet Affoah Koranteng",
              title: "Business Developer",
              image: "/businessdev.jpg",
            },
          ].map((member, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-3xl p-4 space-y-3 hover:shadow-xl transition">
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-2xl w-full object-cover h-[300px]"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-semibold">{member.title}</h3>
              <p className="text-blue-600 font-medium">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
