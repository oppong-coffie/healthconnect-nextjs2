import React from "react";
import Image from "next/image";
const page = () => {
  const partners = [
    {
      id: 1,
      name: "aws",
      pic: "/aws.webp",
      description:
        "With our partnership with Amazon, we have helped businesses build and manage secure and resilient systems. Our AWS-certified solution architects, cloud practitioners, and SysOps administrators bring their expertise to diverse projects, including business applications, databases, data warehouses, IoT infrastructures, big data processing, analytics solutions, application migration to AWS, and managed services to ensure stability in AWS environments.",
    },
    {
      id: 2,
      name: "microsoft",
      pic: "/microsoft.webp",
      description:
        "Through our partnership with Microsoft, we have helped businesses build and manage secure and resilient systems. Our Microsoft certified solution architects, developers, DevOps engineers, Data Analysts, Data engineers, Business Analysts and AI engineers bring their expertise to diverse projects for the development of business applications, databases, data warehouses, IoT infrastructures, big data processing and analytic solutions and application migration to Azure.",
    },
    {
      id: 3,
      name: "salesforce",
      pic: "/salesforce.webp",
      description:
        "Our partnership with Oracle has enabled us to deliver the broad Oracle services and industry knowledge that any organization needs to drive change. We have been helping our customers achieve the best value for their money by creating robust data analytic solutions along with high-performing and secure database environments powered by Oracle expertise.",
    },
    {
      id: 4,
      name: "oracle",
      pic: "/oracle.webp",
      description:
        "Our partnership with Oracle has enabled us to deliver the broad Oracle services and industry knowledge that any organization needs to drive change. We have been helping our customers achieve the best value for their money by creating robust data analytic solutions along with high-performing and secure database environments powered by Oracle expertise.",
    },
    {
      id: 5,
      name: "cisco",
      pic: "/cisco.webp",
      description:
        "Our partnership with Cisco gives us access to robust and intelligent products to improve digital agility and resilience of our customers across various business operations. Reliance on Cisco technologies has enabled us to create scalable data centers and establish secure remote environments.",
    },
  ];
  return (
    <div>
      <Image
        src="/partners.webp"
        alt="partners"
        width={500}
        height={500}
        className="w-full h-full absolute"
      />
      <div className="relative  left-0 top-0 content-center text-center  bg-black opacity-55 text-white h-[100vh]">
        <p className=" font-bold text-5xl">Partnership</p>
        <p className=" text-3xl">
          Put world-class thinking and top tier technology at your service
          through a Partnership
        </p>
      </div>
      <div className="bg-green-400 text-white text-3xl text-center p-5 px-10">
        <p className="text-5xl font-bold p-3">
          Take a deep dive into the power of partnership
        </p>
        <p>
          Our continuous collaboration with the top established leaders in
          technology leads to new growth opportunities and brings to our clients
          all the advantages of the most current technologies. We partner with
          the most trusted names in technology, enabling us to provide top-notch
          products and services to our customers.
        </p>
      </div>

      <div className="block">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="p-5 text-left flex-row md:flex gap-20 text-2xl"
          >
            <Image
              src={partner.pic}
              alt="partner"
              width={200}
              height={200}
              className="py-20 place-self-center"
            />
            <div>
              <p className="p-10">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-hidden ">
        {partners.map((partner) => (
          <div key={partner.id}>
            <Image
              src={partner.pic}
              alt="partner"
              width={300}
              height={300}
              className="p-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
