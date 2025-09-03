import React from "react";
import redshoes from "../assets/red.jpg";
import greenshoes from "../assets/green.jpg";
import yellowshoes from "../assets/yello.jpg";

const MyProducts = () => {
  const images = [
    "https://sageleather.com.pk/wp-content/uploads/2024/10/IMG_3702.jpg",
    "https://www.calza.com.pk/cdn/shop/products/1_ea2f51e9-425c-4382-a1b8-6792a5d22eec.jpg?v=1755867265",
    "https://onedegree.com.pk/cdn/shop/files/39_6fb6be73-ff30-4df7-868e-00bb9b0d7771.jpg?v=1706092698&width=1206",
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-28 py-12">
        <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Step Into <span className="text-yellow-500">Style</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Discover our premium shoe collection designed for comfort, fashion,
            and durability. Perfect for every step you take.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2">
          <img
            src={yellowshoes}
            alt="Yellow Shoes"
            className="h-72 md:h-96 w-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Featured Product */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-8 hover:shadow-2xl transition">
          {/* Text */}
          <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Red Shoes
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Bold and stylish red shoes built for all-day wear. Add a pop of
              color to your outfit while staying comfortable.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={redshoes}
              alt="Red Shoes"
              className="h-72 md:h-96 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Our Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center group"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-56 h-56 object-cover rounded-lg shadow group-hover:scale-110 transition-transform duration-300"
              />
              <h4 className="mt-5 text-lg font-semibold text-gray-800">
                Jordan Boots
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Another Featured */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-8 hover:shadow-2xl transition">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={greenshoes}
              alt="Green Shoes"
              className="h-72 md:h-96 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Text */}
          <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Green Shoes
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Fresh and sleek green shoes crafted for style and strength.
              Perfect for casual and sporty vibes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
