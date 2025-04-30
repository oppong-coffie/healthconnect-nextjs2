import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Your Health, Our Priority</h2>
        <p className="text-lg mb-6">Providing compassionate healthcare to our community since 1980.</p>
        <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800">Book an Appointment</a>
      </section>

      {/* About Us Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-6">About HealthConnect Hospital 🩺</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image */}
          <div className="flex-1">
            <Image
            src="/images/aihospital.png"
            alt="Health Connect System"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to <span className="font-semibold">HealthConnect Hospital</span> — your trusted bridge between healthcare providers and essential services!        </p>
            <ul className="list-none list-inside space-y-4 text-gray-700">
              <li>🏥 <span className="font-semibold">Hospitals:</span> Get access to top hospitals for treatments and consultations.</li>
              <li>💊 <span className="font-semibold">Pharmacies:</span> Connect easily to licensed pharmacies for your prescriptions and medications.</li>
              <li>🚑 <span className="font-semibold">Transport Services:</span> Request reliable ambulance services and patient transport anytime.</li>
            </ul>
            <p className="mt-6 text-gray-700">
              Our goal is to make healthcare accessible, fast, and connected — all at your fingertips. 🤝
            </p>
          </div>
        </div>
      </section>

   

   {/* Services Section */}
<section id="services" className="bg-gray-100 py-20 px-6">
  <div className="container mx-auto">
    <h3 className="text-3xl font-bold mb-12 text-center">Core Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Service 1 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Emergency Care 🚑</h4>
        <p className="text-gray-600">24/7 emergency services with specialized trauma care units.</p>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Cardiology ❤️</h4>
        <p className="text-gray-600">Comprehensive cardiac care with advanced diagnostic tools.</p>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Pediatrics 👶</h4>
        <p className="text-gray-600">Dedicated care for infants, children, and adolescents.</p>
      </div>

      {/* Service 4 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Pharmacy Access 💊</h4>
        <p className="text-gray-600">Instant connection to trusted pharmacies for prescriptions and refills.</p>
      </div>

      {/* Service 5 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Patient Transport Services 🚐</h4>
        <p className="text-gray-600">Ambulance and non-emergency transport available to your location.</p>
      </div>

      {/* Service 6 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-xl font-semibold mb-2">Online Consultations 💻</h4>
        <p className="text-gray-600">Virtual doctor appointments for convenience and faster diagnosis.</p>
      </div>
    </div>
  </div>
</section>


     {/* Hospital Section */}
<section id="hospitals" className="container mx-auto py-20 px-6">
  <h3 className="text-3xl font-bold mb-12 text-center">Our Partner Hospitals</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Hospital 1 */}
    <div className="text-center bg-white p-6 rounded-lg shadow">
      <img src="/images/hospital1.jpg" alt="Hospital 1" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
      <h5 className="text-xl font-semibold mb-1">Sunrise Medical Center</h5>
      <p className="text-gray-600 text-sm">Leading hospital specializing in emergency care, surgery, and outpatient services.</p>
      <p className="text-gray-500 text-sm mb-2">📍 Accra, Ghana</p>
    </div>

    {/* Hospital 2 */}
    <div className="text-center bg-white p-6 rounded-lg shadow">
      <img src="/images/hospital.jpg" alt="Hospital 2" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
      <h5 className="text-xl font-semibold mb-1">Green Valley Hospital</h5>
      <p className="text-gray-600 text-sm">Advanced pediatric and maternity services with state-of-the-art facilities.</p>
      <p className="text-gray-500 text-sm mb-2">📍 Kumasi, Ghana</p>
    </div>

    {/* Hospital 3 */}
    <div className="text-center bg-white p-6 rounded-lg shadow">
      <img src="/images/hospital3.jpg" alt="Hospital 3" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
      <h5 className="text-xl font-semibold mb-1">CityHeart Institute</h5>
      <p className="text-gray-600 text-sm">Specializing in cardiovascular treatments and heart surgeries with expert care.</p>
      <p className="text-gray-500 text-sm mb-2">📍 Takoradi, Ghana</p>
    </div>
  </div>
</section>

    </div>
  );
  
}

export default page