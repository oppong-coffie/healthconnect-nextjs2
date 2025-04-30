import React from "react";
import Image from "next/image";

const page = () => {
  const services = [
    {
      id: 1,
      pic: "/long.jpg",
      title: "City-to-City Transport",
      description:
        "Regular routes connecting major cities with comfortable coaches and convenient schedules.",
    },
    {
      id: 2,
      pic: "/toyota.jpeg",
      title: "Charter Services",
      description:
        "Custom transportation solutions for groups, events, and special occasions.",
    },

    {
      id: 3,
      pic: "/minicars.jpg",
      title: "Mini Bus",
      description: "Perfect for smaller groups and shorter distances.",
    },
  ];
  return (
    <div>
      <div className="lg:flex gap-15">
        <div className="md:text-lg  md:w-xl md:p-20">
          <h1 className="md:text-5xl text-2xl text-purple-500 font-extrabold text-center">
            Our Transport Services
          </h1>
          <p className="text-left px-3">
            We Offer a seamless transport service. Our buses are just a call
            away. You can call us for all your trips,whether long or short
            trips. Our drivers are also ready to move anytime you call.If you
            want to be safe and comfortable for your trip, consider our
            transport service.
          </p>
          <h2 className="text-lg font-semibold px-3">
            Reasons why you should choose us
          </h2>
          <ul className="list-disc px-10">
            <li>Comfortable seating</li>
            <li>Air conditioning</li>
            <li>Ample luggage space</li>
            <li>Professional drivers</li>
            <li>Comfortable interior</li>
            <li>Flexible scheduling</li>
            <li>Ideal for corporate events</li>
          </ul>
        </div>
        <Image
          src="/bus1.png"
          width={500}
          height={500}
          alt="image"
          className="p-5"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold px-3 text-center">Our Services</h2>
        <div className="md:flex gap-5 p-10">
          {services.map((service) => (
            <div className=" shadow-xl  rounded-xl" key={service.id}>
              <Image
                src={service.pic}
                className="p-5 w-full"
                alt="image"
                width={500}
                height={500}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-purple-500">
                  {service.title}
                </h3>
                <p className="p-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
