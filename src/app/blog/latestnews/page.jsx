'use client';

import React from 'react';
import Image from 'next/image';

const News = () => {
  const newsData = [
    {
      id: 0,
      title:
        'Naana Adwoa, CEO of Tadi Fashion Hub, Wins Young Entrepreneur Award',
      image: '/images/news17.jpeg',
    },
    {
      id: 1,
      title:
        'Tadi Fashion Hub Launches Its First Fashion Incubation Program for Young Designers',
      image: '/images/newshero2.jpg',
    },
    {
      id: 2,
      title:
        'Inside the Grand Opening of Tadi Fashion Hub: A Night of Style and Innovation',
      image: '/images/news1.jpeg',
    },
    {
      id: 3,
      title: 'Inside the Grand Opening of Tadi Fashion Hub',
      image: '/images/news10.jpeg',
    },
    {
      id: 4,
      title: 'Fashion Meets Culture: Highlights from Tadi Hub’s Runway',
      image: '/images/news9.jpeg',
    },
    {
      id: 5,
      title: 'Exclusive Interview with Tadi Fashion Mentors',
      image: '/images/news6.jpg',
    },
    {
      id: 6,
      title: 'Next Gen Designers Debut at Tadi Fashion Hub',
      image: '/images/news8.jpeg',
    },
    {
      id: 7,
      title: 'From Sketch to Spotlight: A Designer’s Journey',
      image: '/images/news7.jpeg',
    },
    {
      id: 8,
      title: 'Tadi Fashion Week: What to Expect This Year',
      image: '/images/news11.jpeg',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 py-6">
      {/* Left - Main News */}
      <div className="lg:col-span-4 space-y-6">
        {/* Hero Banner */}
        <div
          style={{ backgroundImage: `url(${newsData[0].image})` }}
          className="w-full h-[300px] bg-cove bg-center rounded-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-end">
            <div className="p-6">
              <h1 className="text-white text-3xl lg:text-4xl font-bold leading-tight w-[65%]">
                {newsData[0].title}
              </h1>
            </div>
          </div>
        </div>

        {/* 2 Tile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[newsData[1], newsData[2]].map((news) => (
            <div
              key={news.id}
              style={{ backgroundImage: `url(${news.image})` }}
              className="h-[250px] bg-cover bg-center rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-end">
                <div className="p-4">
                  <h2 className="text-white text-xl font-semibold">
                    {news.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(3).map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={256}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">
                  {news.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:col-span-1">
        <div
          className="w-full h-full min-h-[600px] bg-cover bg-center rounded-xl relative overflow-hidden"
          style={{ backgroundImage: 'url("/images/hero1.jpg")' }}
        >
        <div className="">
  <Image
    src="/images/ad1.jpeg"
    alt="Ad 1"
    width={400}
    height={456}
    className="rounded-lg shadow-md object-cover mb-5"
  />
  <Image
    src="/images/ad4.jpeg"
    alt="Ad 2"
    width={400}
    height={456}
    className="rounded-lg shadow-md object-cover mb-5"
  />
  <Image
    src="/images/ad3.jpeg"
    alt="Ad 3"
    width={400}
    height={256}
    className="rounded-lg shadow-md object-cover mb-5"
  />
  <Image
    src="/images/ad6.jpeg"
    alt="Ad 3"
    width={300}
    height={356}
    className="rounded-lg shadow-md object-cover mb-5"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default News;
