"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const [, setIs2FAModalOpen] = useState(false);
  // const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIs2FAModalOpen(true); // Open 2FA modal after login
  };

  // const handle2FASubmit = () => {
  //   console.log("OTP Submitted:", otp);
  //   setIs2FAModalOpen(false); // Close modal after OTP submission
  // };

  return (
    <div className="max-w-6xl mx-auto p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden min-h-[550px]">
        {/* Image Section (Hidden on small screens) */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src="/login.webp" // No ./ needed
            alt="Hospital lo"
            width={600}
            height={500}
          />

          <div className="absolute inset-0 bg-black/50 flex items-end justify-center">
            <div className="text-white text-center pb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                Welcome to Our Platform
              </h2>
              <p className="text-lg md:text-xl">
                Experience seamless interaction and top-tier services.
              </p>
            </div>
          </div>
        </div>

        {/* START:: Form Section */}
        <div className="card-body flex flex-col justify-center p-8 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Futurix
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Welcome Back! Log in to the system
          </p>

          <form onSubmit={handleLogin} className="space-y-4 px-12">
            <fieldset className="mb-3">
              <legend className="text-sm font-medium text-gray-700">
                Hospital Identification*
              </legend>
              <Input
                type="text"
                className="input input-bordered w-full text-base p-2 rounded-lg"
                placeholder="Enter your Hospital ID"
                required
              />
            </fieldset>

            <fieldset className="mb-3">
              <legend className="text-sm font-medium text-gray-700">
                Hospital Email*
              </legend>
              <Input
                type="email"
                className="input input-bordered w-full text-base p-2 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </fieldset>

            <fieldset className="mb-3">
              <legend className="text-sm font-medium text-gray-700">
                Password*
              </legend>
              <input
                type="password"
                className="input input-bordered w-full text-base p-2 rounded-lg"
                placeholder="Enter your password"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters
              </p>
            </fieldset>

            <div className="text-right">
              <Link
                href="/authentication/forgetpage1"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="primary"
              className="bg-green-600 w-full py-2 text-lg text-white rounded-lg"
              onClick={() => router.push("/dashboard")}
            >
              Login
            </Button>
          </form>

          <div className="relative flex flex-col items-center justify-center pt-6 space-y-3">
            <div className="w-full border-t border-gray-300"></div>

            <div className="flex flex-col items-center space-y-2">
              <Link
                href="/authentication/scan"
                className="text-sm text-blue-600 hover:text-blue-700 transition"
              >
                🔑 Sign in with ID
              </Link>
              <Link
                href="/register"
                className="text-sm text-blue-600 hover:text-blue-700 transition"
              >
                ✨ Don&apos;t have an account?{" "}
                <span className="font-semibold">Register</span>
              </Link>
            </div>
          </div>
        </div>

        {/* END:: Form Section */}
      </div>
    </div>
  );
}
