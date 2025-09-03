import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
const Aboutus = () => {
  return (
    <>
    <Navbar />
    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-yellow-500">Ecommerce</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Ecommerce</span>, your
            one-stop shop for high-quality products at unbeatable prices. We
            pride ourselves on offering a wide selection of clothing, shoes,
            accessories, and more — all designed to match your unique style.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is simple: deliver fashion, comfort, and durability
            right to your doorstep. With a passionate team, secure shopping, and
            fast delivery, we aim to make your shopping experience smooth and
            enjoyable.
          </p>
          <ul className="text-gray-700 text-base space-y-2">
            <li>✔ Premium Quality Products</li>
            <li>✔ Fast & Secure Delivery</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>
        </div>

        {/* Right Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="About Ecommerce"
            className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
          />
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Find Us on the Map
        </h3>
        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220752.13800236775!2d71.56183010458984!3d30.17279017499452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1756895092905!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Aboutus
