import React from "react";

const CartCard = ({cartItem}) => {
  return (
    <div className="card max-w-xs xl:max-w-sm bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
      <figure>
        <img src={cartItem.image} alt="Shoes" className="w-full h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cartItem.name}</h2>
      </div>
    </div>
  );
};

export default CartCard;
