"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "antd";
import { MailOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);

  // Handle email submission
  // const handleSubmit = () => {
  //   if (!email.includes("@")) {
  //     message.error("🚨 Please enter a valid email!");
  //     return;
  //   }
  //   setLoading(true);
  //   setTimeout(() => {
  //     message.success("✅ Verification code sent to your email!");
  //     setLoading(false);
  //   }, 1500);
  // };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/dockey2.webp')" }}
    >
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-sm text-center">
        {/* Illustration */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/dockey1.jpg"
            alt="Forgot Password"
            width={200}
            height={200}
          />
        </div>

        {/* Heading */}
        <h2 className="text-green-500 text-xl font-semibold mt-3">
          🔐 Forgot Password?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1">
          Enter your email, we&apos;ll send a <b>4-digit code</b> to reset your
          password.
        </p>

        {/* Email Input */}
        <div className="mt-4 text-left">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            📧 Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            prefix={<MailOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>

        {/* Continue Button */}
        <Link href="/authentication/forgetpage1/verification" passHref>
          <Button
            type="primary"
            className="w-full mt-3 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700"
          >
            Continue <ArrowRightOutlined />
          </Button>
        </Link>

        {/* Alternate Option */}
        <p className="text-center mt-3 text-xs text-gray-500">
          📱 Prefer using your phone?
          <Link
            href="/authentication/forgetpage1/phone"
            className="text-blue-500 hover:underline ml-1"
          >
            Use phone number
          </Link>
        </p>
      </div>
    </div>
  );
}
