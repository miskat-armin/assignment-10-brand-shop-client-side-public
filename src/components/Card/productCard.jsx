import React from 'react'

const ProductCard = ({product}) => {
    const handleCardClick = () => {
        
    }
    return (
        <div className="card max-w-xs xl:max-w-sm bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
          <figure>
            <img
              src={product.image}
              alt="Shoes"
              className="w-full h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <div className="card-actions justify-start">
              <button onClick={handleCardClick} className="btn btn-primary">More details</button>
            </div>
          </div>
        </div>
      );
}

export default ProductCard