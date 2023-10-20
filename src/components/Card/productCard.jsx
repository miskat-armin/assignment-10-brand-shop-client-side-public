import React from "react";
import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${product.brand_name}/${product.name}`)
  };

  const handleUpdateClick = () => {
    navigate(`/update/${product.brand_name}/${product.name}`)
  }

  return (
    <div className="card max-w-xs xl:max-w-sm bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
      <figure>
        <img src={product.image} alt="Shoes" className="w-full h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>

        <div className="card-actions justify-between">
          <Button onClick={handleUpdateClick} className="btn-accent">Update</Button>
          <button onClick={handleCardClick} className="btn btn-primary">
            More details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
