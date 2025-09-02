import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

export default function OrderAnimation() {
  const cartRef = useRef(null);
  const confirmRef = useRef(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    // Slide in cart from left
    gsap.fromTo(
      cartRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setConfirmed(true);
            // Animate confirmation
            gsap.fromTo(
              confirmRef.current,
              { scale: 0.5, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
            );
          }, 1200);
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {!confirmed ? (
        <div
          ref={cartRef}
          className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center w-56"
        >
          <FaShoppingCart className="w-12 h-12 text-black mb-3" />
          <h2 className="text-lg font-semibold text-gray-900">Processing Order...</h2>
        </div>
      ) : (
        <div
          ref={confirmRef}
          className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center w-64"
        >
          <FaCheckCircle className="w-12 h-12 text-black mb-3" />
          <h2 className="text-xl font-semibold text-gray-900">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2 text-center text-sm">
            Thank you for your purchase.
          </p>
        </div>
      )}
    </div>
  );
}
