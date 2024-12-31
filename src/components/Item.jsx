import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/cartReducer";

function Item(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.title,
        price: props.price,
        quantity: 1,
        image: props.images[0],
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={props.images[0]} alt={props.title} className="w-max h-36" />
      <h1 className="text-xl font-bold">{props.title}</h1>
      <p className="italic mt-2">$ {props.price}</p>
      <p className="text-right font-bold text-red-600 mt-3">  
        -- {props.category.toUpperCase()} --
      </p>
      {items.find((item) => item.id == props.id) ? (
        <button
          className="border-2 bg-blue-400 text-white p-2 rounded-xl mt-4 pl-4 pr-4"
          onClick={() => alert("This item is already in your cart!")}
        >
          Added to cart
        </button>
      ) : (
        <button
          className="border-2 bg-blue-800 text-white p-2 rounded-xl mt-4 pl-4 pr-4"
          onClick={handleClick}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Item;
