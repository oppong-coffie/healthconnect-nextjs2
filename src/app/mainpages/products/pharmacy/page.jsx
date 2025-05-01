import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        src="/images/drugs.jpg"
        alt="drug-shelf"
        width={500}
        height={500}
        className="w-full h-full absolute"
      />
      <div className="relative left-0 top-0 bg-black opacity-70 h-[100vh] w-full text-center  text-white ">
        <div className=' text-white  lg:px-80'>
        <p className='md:text-5xl text-lg font-bold p-10 lg:pt-40 opacity-100 '>We can get your Drug Prescriptions to You</p>
        <p className='md:px-20 px-2 '>
          We have all the drugs your doctor prescribed for your health and what's more, we can get it to you. With our collaboration with various hospitals, we have a deck of pharmacies with all your drug requirement.
        </p>
        <div className='flex gap-0 my-20 md:mx-40'>
          <input type='text' placeholder='🔍  Search for drugs in here' className='md:py-3 py-1 ml-5 md:px-5 px-2 text-md md:text-xl text-black rounded-l-xl'/> 
          <button className='bg-green-400 rounded-r-xl '>Find drug</button>
        </div>
        </div>
      </div>
      <div className='lg:px-20 px-5'>
      <div className='p-5 items-center md:text-xl block md:flex gap-10'>
         <div className='lg:p-20'>
        <p className='font-bold  text-blue-400'>
          All your Medicine needs in one place
        </p>
        <ul className='list-disc'>
          <li className='p-2'>Search and find all kinds of drugs</li>
          <li className='p-2'>We have all prescribed drugs</li>
          <li className='p-2'>Get notified when your drug is available</li>
        </ul>
      </div>
      <Image src='/images/pharmacy/drugshelf.png' alt='all-in-one' width={500} height={500}  />
      </div>
       <div className='p-5 items-center md:text-xl block md:flex flex-row-reverse gap-20'>
         <div className='lg:p-20' >
        <p className='font-bold  text-blue-400  '>
          Get your drugs at your doorstep
        </p>
        <ul className='list-disc'>
          <li className='p-2'>Get straight delivery to your doorstep</li>
          <li className='p-2'>We deliver within 24 hours of your request</li>
          <li className='p-2'>We guarantee rapid response</li>
        </ul>
      </div>
      <Image src='/images/pharmacy/delivery.png' alt='all-in-one' width={300} height={300} />
      </div>
      <div className='p-10 items-center md:text-xl block md:flex gap-10 '>
         <div className=' lg:px-20'>
        <p className='font-bold  text-blue-400 '>
          Get started and join the family
        </p>
        <ul className='list-disc'>
          <li className='p-2'>Sign up and enjoy easy care from us</li>
          <li className='p-2'>Your health data is checked,secured and kept for future reference</li>
          <li className='p-2'>Get notified when your drug is available</li>
        </ul>
      </div>
      <Image src='/images/pharmacy/join.png' alt='all-in-one' width={500} height={500}  />
      </div>
     </div>
    </div>
  );
};

export default page;
