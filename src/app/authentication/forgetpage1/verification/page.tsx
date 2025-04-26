"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Verify = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [time, setTime] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle key press (Backspace navigation)
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Countdown Timer
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  // Handle Verification
  // const handleVerify = () => {
  //   if (code.includes("")) {
  //     message.error("🚨 Please enter the full code!");
  //     return;
  //   }
  //   message.success("✅ Code verified successfully!");
  // };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 relative"
      style={{ backgroundImage: "url('/phonepin.jpg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 w-full max-w-md text-center relative z-10 border border-gray-200">
        {/* Illustration */}
        <div className="flex justify-center">
          <Image
            src="/example2.gif"
            alt="Verification"
            width={150}
            height={150}
            className="animate-fadeIn"
          />
        </div>

        {/* Title */}
        <h1 className="text-blue-500 text-2xl font-bold flex justify-center items-center gap-2 animate-fadeIn">
          🔐 Verification
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mt-2 flex items-center justify-center gap-2 animate-fadeIn">
          <MailOutlined /> Enter the <b>4-digit</b> code sent to your
          email/phone.
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center gap-4 mt-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => {
                inputRefs.current[index] = el; // Assign value
              }} // ✅ No return statement
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-2xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-md"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Link href="/authentication/forgetpage1/success" legacyBehavior>
          <a
            className="w-full mt-6 py-3 text-lg font-semibold flex items-center justify-center gap-3
               bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700
               transition-all duration-300 ease-in-out transform hover:scale-105
               shadow-md shadow-green-500/50 hover:shadow-lg hover:shadow-green-500/70
               rounded-xl text-white relative overflow-hidden disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 bg-white opacity-10 rounded-xl blur-md"></span>
            <CheckCircleOutlined className="text-xl animate-bounce" />
            <span className="relative">VERIFY</span>
          </a>
        </Link>

        {/* Timer & Resend */}
        <p className="text-center text-lg mt-5 font-medium text-gray-600 flex justify-center items-center gap-2">
          <ClockCircleOutlined className="text-blue-500" />
          <span className="text-gray-800 font-semibold">
            00:{time < 10 ? `0${time}` : time}
          </span>
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Didn’t receive a code?{" "}
          <Button
            onClick={() => setTime(60)}
            disabled={time > 0}
            className={`font-semibold transition-all ${
              time > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-red-500 hover:underline"
            }`}
          >
            Resend
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Verify;
