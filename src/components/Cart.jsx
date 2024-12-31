import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItemQuantity, removefromCart } from "../store/reducers/cartReducer";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
  const quantity = items.reduce((a, b) => a + b.quantity, 0);

  return (
    <div>
      {
        items && items.length > 0 &&
      <Link to="/checkout" className="font-semibold m-2 mr-6 p-2 bg-green-600 text-white pl-4 pr-4 rounded-xl float-right">Checkout</Link>
      }
      <Link to="/" className="font-semibold m-2 p-2 bg-blue-700 text-white pl-4 pr-4 rounded-xl float-right">Go back</Link>
      <div className="m-2 mt-3 ml-4">
      <h1 className="text-4xl font-bold text-green-600 m-2 ml-4">Cart</h1>
      <p className="text-xl m-2 mt-4">
        Amount: <span className="font-bold">${total.toFixed(2)}</span>
      </p>
      <p className="text-xl m-2">
        Products: <span className="font-bold">{items.length}</span>
      </p>
      <p className="text-xl m-2">
        Quantity: <span className="font-bold">{quantity}</span>
        </p>
        </div>
      <div className="flex flex-wrap gap-4 ml-5 mt-5">
        { items.length > 0 ?
          items.map((item) => (
          <div className="m-1 border-2 border-gray-400 w-[275px] flex flex-col justify-center items-center rounded-2xl">
            <img src={item.image} alt={item.title} className="w-max h-36" />
            <h1 className="text-xl font-bold m-2">{item.name}</h1>
            <p className="italic">$ {item.price}</p>
            <p className="mt-1">Qty: <span className="font-bold">{item.quantity}</span></p>
            <div className="mt-3">
              <button
                className="border-2 bg-green-700 rounded-lg text-white p-1 pl-3 pr-3 m-2"
                onClick={() =>
                  dispatch(
                    changeItemQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
              >
                <span className="material-symbols-outlined mt-1">add</span>
              </button>
              {item.quantity > 1 ? (
                <button
                  className="border-2 bg-blue-700 rounded-lg text-white p-1 pl-3 pr-3 m-2"
                  onClick={() =>
                    dispatch(
                      changeItemQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                >
                  <span className="material-symbols-outlined mt-1">remove</span>
                </button>
              ) : (
                <button
                  className="border-2 bg-blue-700 rounded-lg text-white p-1 pl-3 pr-3 m-2"
                  onClick={() =>
                    dispatch(
                      removefromCart({
                        id: item.id,
                      })
                    )
                  }
                >
                  <span className="material-symbols-outlined mt-1">remove</span>
                </button>
              )}
              <button
                className="border-2 bg-red-500 rounded-lg text-white p-1 pl-3 pr-3 m-2"
                onClick={() => dispatch(removefromCart({ id: item.id }))}
              >
                <span className="material-symbols-outlined mt-1">delete</span>
              </button>
            </div>
          </div>
          ))
        : <h1 className="text-2xl font-bold">No items in cart!!</h1>
        }
      </div>
    </div>
  );
}

export default Cart;
