'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollingImages from "./ScrollingImages";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div 
  className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat text-white"
  style={{ 
    backgroundImage: "url('/contact.png')",
    backgroundSize: 'cover',
    // backgroundPosition: 'center'
  }}
>
  
  {/* Navbar */}
  <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-black shadow-md' : 'bg-transparent'
  }`}>
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      {/* Navbar on top of image */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black shadow-md' : 'bg-transparent'
        }`}>
          <div className="navbar px-4 py-3">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Services</a></li>
                </ul>
              </div>
              <a href="#" className="text-xl text-white">Starinx</a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>

            <div className="navbar-end">
              <a href="#" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>
    </div>
  </div>

  {/* Overlay */}
  <div className="w-full h-[400px] flex flex-col items-center justify-center bg-black bg-opacity-40 pt-32 sm:pt-40">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">We'd love to hear from you</p>
    </div>
  </div>
</div>

{/* Main Content */}
<div className="container mx-auto px-4 sm:px-6 py-12">
  <div className="text-center mb-12">
    <h3 className="text-2xl sm:text-4xl font-semibold mb-2">If You Have Any Query,</h3>
    <h5 className="text-xl sm:text-2xl font-semibold">Feel Free To Contact Us</h5>
  </div>
       
   
       {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  {[
    { icon: "📞", title: "Call to ask any question", content: "+233551091265", link: "tel:+233551091265" },
    { icon: "✉️", title: "Email to get free quote", content: "clients.info@starinx.com", link: "mailto:clients.info@starinx.com" },
    { icon: "📍", title: "Visit our office", content: "NT469 Obutu Street, Accra Newtown, Ghana" }
  ].map((item, index) => (
    <div key={index} className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow text-center">
      <span className="text-4xl mb-4 inline-block">{item.icon}</span>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      {item.link ? (
        <a href={item.link} className="text-blue-500 hover:underline">{item.content}</a>
      ) : (
        <p>{item.content}</p>
      )}
    </div>
  ))}
</div>

{/* Form and FAQ */}
<div className="flex flex-col lg:flex-row gap-8 mb-12">
  {/* Contact Form */}
  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
    <form className="space-y-4">
    
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered flex-1 p-3 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered flex-1 p-3 text-sm"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full p-3 text-sm"
                required
              />
              <textarea
                className="textarea textarea-bordered w-full p-3 text-sm"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>

              {/* Checkbox */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="checkbox"
                />
                <span className="text-sm">Subscribe to newsletter</span>
              </label>

              <button type="submit" className="btn btn-primary w-full text-sm py-3">
                Send Message
              </button>
           
    </form>
  </div>

  {/* FAQ Section */}
  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {/* FAQ Items */}
      {[
                { question: "How do I create an account?", answer: "Click the 'Sign Up' button in the top right corner and follow the registration process." },
                { question: "I forgot my password. What should I do?", answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email." },
                { question: "How do I update my profile information?", answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes." }
              ].map((faq, idx) => (
                <div key={idx} className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
                  <div className="collapse-title font-semibold text-base">{faq.question}</div>
                  <div className="collapse-content text-sm">{faq.answer}</div>
                </div>
              ))}
    </div>
  </div>
</div>
       

        {/* Scrolling Images */}
        <ScrollingImages />

      {/* Footer */}
<footer className=" py-12">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo & Newsletter */}
      <div>
        <Image src="/StarinxLogoBlack.png" alt="Starinx Logo" width={120} height={40} />
        <p className="mt-4 text-gray-600">Let's help you innovate the future.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
        <ul className="space-y-2">
          <li>📍 NT469 Obutu Street, Accra Newtown, Ghana</li>
          <li>✉️ info.user@starinx.com</li>
          <li>📞 +233 551 091 265</li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Jobs</a></li>
          <li><a href="#" className="hover:underline">Press Kit</a></li>
        </ul>
      </div>

      {/* Legal Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Terms of Use</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
      © {new Date().getFullYear()} Starinx. All rights reserved.
    </div>
  </div>
</footer>

      </div>
    </>
  );
}
