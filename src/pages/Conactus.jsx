import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar'
const Conactus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowPopup(true);

    try {
      const response = await fetch("https://emaisender.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
      console.error(error);
    }

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <NavBar />
      <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact <span className="text-amber-500">Us</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions? Get in touch with us. We're here to help you with
              orders, returns, or any other inquiries.
            </p>

            <div className="space-y-4 text-gray-700 text-base">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-500" /> +92 300 1234567
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500" /> support@mystore.com
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-500" /> Multan, Punjab,
                Pakistan
              </p>
            </div>

            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
              alt="Contact Us"
              className="rounded-xl shadow-lg w-full mt-6"
            />
          </div>

          {/* Right: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 bg-gray-100 text-gray-900 outline-none rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 bg-gray-100 text-gray-900 outline-none rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="px-4 py-3 bg-gray-100 text-gray-900 outline-none rounded-lg resize-none"
                required
              ></textarea>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-600 transition">
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
            {status}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Conactus;
