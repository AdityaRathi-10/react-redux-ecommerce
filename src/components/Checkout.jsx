import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const total = useSelector((state) =>
    state.cart.reduce((a, b) => a + b.price * b.quantity, 0)
  )

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-800 border-solid rounded-full animate-spin border-t-transparent"></div>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 flex justify-center flex-col gap-10 items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
              <h1 className="text-4xl font-bold text-green-600 mb-4">
                Thank You for Your Purchase!
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Your order is being processed. We will send you an email
                confirmation shortly.
              </p>

              <div className="mt-6">
                <Link
                  to="/"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Back to Shop
                </Link>
              </div>
            </div>
            <div className="text-2xl font-semibold">
              Total Amount:{" "}
              <span className="text-3xl font-bold text-gray-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
