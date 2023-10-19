import React, { useEffect, useState } from "react";
import { Button, Rating } from "react-daisyui";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      import.meta.env.VITE_EXPRESS_API +
        `/products/${params.brand}/${params.product}`,
      {
        method: "GET",
        signal: signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });

    return () => {
      controller.abort();
    };
  }, [params.brand, params.product]);

  const handleAddToCart = () => {};
  return (
    <div>
      {product && (
        <div className="flex flex-col">
          <img
            src={product?.image}
            alt="image"
            className="w-full h-52 object-contain"
          />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.type}</p>
          <p>{product.description}</p>
          <Rating value={product.rating}>
            <Rating.Item name="rating-1" className="mask mask-star" />
            <Rating.Item name="rating-1" className="mask mask-star" />
            <Rating.Item name="rating-1" className="mask mask-star" />
            <Rating.Item name="rating-1" className="mask mask-star" />
            <Rating.Item name="rating-1" className="mask mask-star" />
          </Rating>

          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
