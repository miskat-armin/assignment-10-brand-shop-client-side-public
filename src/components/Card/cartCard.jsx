import React from "react";
import { Rating } from "react-daisyui";

const CartCard = ({cartItem}) => {

  return (
    <div className="card card-compact w-72 xl:w-96 bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
    <figure>
      <img src={cartItem.image} alt="brands" className="h-48 object-contain" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-3xl">{cartItem.name}</h2>
      <p className="text-sm text-gray-600">${cartItem.price}</p>
      <Rating value={cartItem.rating}>
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
      </Rating>
      <div className="flex w-full justify-between">
        <p className="text-lg font-semibold text-left">
          Brand: {cartItem.brand_name}
        </p>
        <p className="text-lg font-semibold text-right">
          Type: {cartItem.type}
        </p>
      </div>
    </div>
  </div>
  );p
};

export default CartCard;
