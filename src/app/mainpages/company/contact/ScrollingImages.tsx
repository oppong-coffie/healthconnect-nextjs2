// components/ScrollingImages.tsx
"use client";

import Image from "next/image";

export default function ScrollingImages() {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee flex space-x-8">
        {/* Images */}
        <Image src="/images/xploiit-white.png" alt="xploiit-white" width={100} height={100} />
        <Image src="/images/xpt-main.png" alt="xpt-main" width={100} height={100} />
        <Image src="/images/xpt1.png" alt="xpt1" width={100} height={100} />
        
      </div>

      {/* Styling */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
