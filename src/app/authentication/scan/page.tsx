"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const ScanPage: React.FC = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream; // Store the stream reference
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop()); // Stop all media tracks
      streamRef.current = null;
    }
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center">Scanner</h2> <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center bg-base-100 shadow-sm rounded-lg h-[500px]">
          <Image
            src="./scanp.png"
            alt="Scan"
            className="w-[510px] max-w-full h-full object-cover rounded-lg"
            width={150}
            height={150}
          />
        </div>

        {/* Text Section */}
        <div className="bg-base-100  rounded-lg p-6 flex flex-col justify-center h-[500px]">
          <h2 className="text-6xl font-semibold text-center">
            Time to scan your ID!
          </h2>{" "}
          <br />
          <p className="text-gray-600 mt-2">
            Raise ur card to Capture and process scanned content instantly.
          </p>
          <div className="mt-4">
            <button
              onClick={startCamera}
              className="btn btn-success w-full lg:w-auto"
            >
              Scan
            </button>
          </div>
        </div>
      </div>
      {/* Camera Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-center mb-2">
              Scan Document
            </h2>

            <video
              ref={videoRef}
              autoPlay
              className="w-full h-64 bg-black"
            ></video>
            <canvas ref={canvasRef} className="hidden"></canvas>

            <div className="flex justify-between mt-4">
              <button onClick={captureImage} className="btn btn-success w-1/2">
                Capture
              </button>
              <button onClick={stopCamera} className="btn btn-danger w-1/2">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
