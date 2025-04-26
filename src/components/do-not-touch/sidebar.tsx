"use client";
import { useState } from "react";
import {
  Home,
  MessageCircle,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import Image from "next/image";
import { SidebarTypes } from "../../../types";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-white shadow-lg p-4 transition-all ${
        isOpen ? "w-64" : "w-20 flex flex-col items-center"
      }`}
    >
      {!isOpen && (
        <button className="p-2 mb-4" onClick={() => setIsOpen(!isOpen)}>
          <CircleArrowRight className="w-7 h-7 text-gray-700" />
        </button>
      )}

      {/* Profile Section */}
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image
            src="/images/avatar/ivanmagalhaes.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
            width={150}
            height={150}
          />
          {isOpen && (
            <div>
              <h4 className="text-sm font-semibold">John Doe</h4>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
        {isOpen && (
          <button className="p-2 mb-4" onClick={() => setIsOpen(!isOpen)}>
            <CircleArrowLeft className="w-7 h-7 text-gray-700" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <SidebarItem icon={Home} text="Home" isOpen={isOpen} />
        <SidebarItem icon={MessageCircle} text="Message" isOpen={isOpen} />

        <SidebarItem icon={Users} text="Group" isOpen={isOpen} />
        <SidebarItem icon={Settings} text="Settings" isOpen={isOpen} />
        <SidebarItem icon={HelpCircle} text="Support" isOpen={isOpen} />
      </nav>

      {/* Logout */}
      <div className="mt-10">
        <SidebarItem icon={LogOut} text="Logout" isOpen={isOpen} />
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, text, isOpen }: SidebarTypes) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer relative">
      <Icon className="w-5 h-5 text-gray-700" />
      {isOpen && <span className="text-gray-800">{text}</span>}
    </div>
  );
}
