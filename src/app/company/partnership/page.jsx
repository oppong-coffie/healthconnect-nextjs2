import React from "react";
import Image from "next/image";
import { partners } from "./partners-info/data";

const page = () => {
  return (
    <section>
      <div className="bg-[url('/partners.webp')] relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col  justify-center text-white ">
        <div className="bg-black bg-opacity-70 top-0 left-0 relative min-h-screen min-w-screen text-center  pt-10">
          <div className="translate-y-[300%]">
            <h1 className="text-5xl ">Partnership</h1>
            <p>
              Put world-class thinking and top-tier technology at your service
              through a partnership.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 text-white text-center p-5">
        <h1 className="text-4xl">
          Take a deep dive into the power of partnership
        </h1>
        <p className="text-xl">
          Our continuous collaboration with the top established leaders in
          technology leads to new growth opportunities and brings to our clients
          all the advantages of the most current technologies. We partner with
          the most trusted names in technology, enabling us to provide top-notch
          products and services to our customers.
        </p>
      </div>
      <div className="p-5 text-lg">
        {partners.map((partner) => (
          <div className="block lg:flex gap-20 p-1 lg:p-5 " key={partner.id}>
            <Image
              src={partner.image}
              alt={partner.name}
              width={150}
              height={70}
              className="p-4 m-4 place-self-center"
            />
            <p className="lg:w-[70%] lg:mx-5">{partner.description}</p>
          </div>
        ))}
      </div>
      <div className="flex lg:gap-20 gap-3 overflow-hidden justify-center p-5 ">
        {partners.map((partner) => (
          <Image
            src={partner.image}
            width={100}
            height={100}
            alt={partner.name}
            key={partner.id}
            className="min-w-12"
          />
        ))}
      </div>
    </section>
  );
};

export default page;

