import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold">About HealthConnect</h2>
          <p className="mt-2 text-gray-400">
            A modern healthcare system integrating hospitals, pharmacies, and medical transport for better accessibility and efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-blue-400">🏥 Hospital</a></li>
            <li><a href="#" className="hover:text-blue-400">💊 Pharmacy</a></li>
            <li><a href="#" className="hover:text-blue-400">🚑 Transport</a></li>
            <li><a href="#" className="hover:text-blue-400">📞 Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-3 justify-center">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl">
              <FacebookOutlined />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <TwitterOutlined />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HealthConnect. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
