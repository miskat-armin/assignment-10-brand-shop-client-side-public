import React, { useEffect, useState } from "react";
import { Button, Rating } from "react-daisyui";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

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
        setLoading(false);
        setProduct(data);
      });

    return () => {
      controller.abort();
    };
  }, [params.brand, params.product]);

  console.log(product)

  const handleAddToCart = () => {
    fetch(import.meta.env.VITE_EXPRESS_API + "/carts/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...product,
        user: user.uid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.error("Error! cannot be added to cart");
        else toast.success("Added to the cart successfully");
        console.log(data);
      });
  };

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div className="flex flex-col">
      <div className="flex justify-center flex-row-reverse items-center">
        <img src={product?.image} alt="image" className="w-auto h-52" />

        <div className="flex flex-col m-10">
          <div className="flex flex-col mb-10">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <Rating value={product.rating}>
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
            </Rating>
          </div>
          <Button className="mt-auto" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>

      <p>{product.type}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
