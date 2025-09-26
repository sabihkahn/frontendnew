import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iphone from "../assets/iphone.png";
import videoh from "../assets/videoh.mp4";
import diliver from "../assets/diliver.mp4";

const MyProducts = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Aura Black Arabic Watch",
      description: "Lightweight, stylish, and designed for comfort.",
      price: 120,
      stock: 25,
      discount: "20% OFF",
      img: "https://importedgear.pk/cdn/shop/files/rn-image_picker_lib_temp_6d3c53dd-f631-45fc-b2ce-0a026781c424.png?v=1750358472&width=1260",
    },
    {
      id: 2,
      name: "Trendy Casual Shirt",
      description: "High-quality fabric for style and comfort.",
      price: 150,
      stock: 10,
      discount: "10% OFF",
      img: "https://image.made-in-china.com/202f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.jpg",
    },
    {
      id: 3,
      name: "Classic Black Shirt",
      description: "Everyday essential with durable stitching.",
      price: 95,
      stock: 30,
      discount: "15% OFF",
      img: "https://discountstore.pk/cdn/shop/files/1_9cc90884-c3ff-432e-887d-f2ba7a37dde0.webp?v=1732890801",
    },
    {
      id: 4,
      name: "iPhone 11",
      description: "Premium design with powerful performance.",
      price: 80,
      stock: 50,
      discount: "30% OFF",
      img: "https://istore.co.na/cdn/shop/products/190199222748iPhone1164GBGreen.jp_2048x.jpg?v=1598381176",
    },
  ]);

  const navigate = useNavigate();

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const handleNavigate = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="w-full font-sans bg-gradient-to-b from-gray-100 via-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/34b5bf180145769.6505ae7623131.jpg"
            className="w-full h-[60vh] object-cover hover:scale-105 transition-transform duration-500"
            alt="Hero"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              Welcome to <span className="text-yellow-400">Elegance</span>
            </h1>
            <p className="text-lg text-gray-100 mt-3 max-w-2xl text-center">
              Fashion, style, and quality products to define your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Intro with Video */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-10">
        <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Step Into <span className="text-yellow-500">Style</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover our premium collection designed for comfort, durability, and timeless fashion.
          </p>
        </div>
        <div className="flex justify-center md:w-1/2">
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            src={videoh}
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full max-h-[350px] object-cover"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Our Collection
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() =>navigate('/shop') }
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              <img
                src={item.img}
                className="w-full h-52 object-cover rounded-t-2xl"
                alt={item.name}
              />
              <div className="p-5 flex flex-col flex-grow">
                <h1 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h1>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${item.price}
                  </span>
                  <span className="text-xs text-red-500 font-semibold">
                    {item.discount}
                  </span>
                </div>
                <span className="text-xs text-gray-400 mt-2">
                  Stock: {item.stock}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Video */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-16">
        

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center rounded-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl tracking-wide">
            Trust is What <span className="text-yellow-400">Builds Us</span>
          </h2>
         
        </div>
      </section>

    </div>
  );
};

export default MyProducts;
