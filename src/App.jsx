import React, { useState, useEffect } from "react";
import products from "./products.json";
import Item from "./components/Item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);
  const items = useSelector((state) => state.cart);

  useEffect(() => {
    const filtered = products.filter((product) => {
      if (value.length !== 0) {
        for (const tag of product.tags) {
          if (tag.includes(value)) {
            return product
          }
        }
      }
    });
    setItem(filtered);
  }, [value]);

  return (
    <>
      <div className="text-center text-5xl mt-4 font-bold text-gray-500 italic">é-shop</div>
      <div className="m-4">
        <input
          className="border-gray-500 border-2 p-1 pl-2 ml-6 rounded-lg"
          type="text"
          value={value}
          placeholder="Search Product/Category"
          onInput={(e) => setValue(e.target.value.toLowerCase())}
        />
        <Link
          to="/cart"
          className="border-2 bg-green-600 ml-5 text-white p-2 font-semibold text-lg rounded-xl mt-2 pl-5 pr-5"
        >
          Cart
          <span className="material-symbols-outlined text-xl ml-1">shopping_cart</span>
        </Link>
          {items.length > 0 ? (
            <span className="text-white bg-blue-800 rounded-full pl-2 pr-2 p-0.5 relative right-4 bottom-4">
              {items.length}
            </span>
          ) : (
            ""
          )}
        <div className="flex flex-wrap gap-2 ml-4 mt-5 flex-1">
          {value.length > 0
            ? item.map((item) => (
                <div
                  key={item.id}
                  className="border-gray-400 border-2 p-2 m-1 w-[275px] flex flex-col rounded-xl justify-center items-center"
                >
                  <Item key={item.id} {...item} />
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="border-gray-400 border-2 p-2 m-1 w-[275px] flex flex-col rounded-xl justify-center items-center"
                >
                  <Item key={product.id} {...product} />
                </div>
              ))}
        </div>
        </div>
    </>
  );
}

export default App;
