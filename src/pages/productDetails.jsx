import React, { useEffect, useState } from "react";
import { Button, Rating } from "react-daisyui";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window.scrollTo(0, 0);

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

  console.log(product);

  const handleAddToCart = () => {
    fetch(import.meta.env.VITE_EXPRESS_API + "/carts/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  console.log(params.product)

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div className="flex flex-col w-full justify-center items-center my-10">
      <div className="flex justify-center flex-col md:flex-row items-center">
        <img src={product?.image} alt="image" className="h-96 w-auto object-contain md:max-w-[60%]" />

        <div className="flex flex-col m-10">
          <div className="flex flex-col mb-10">
            <p className="text-3xl lg:text-5xl font-bold font-serif">
              {product.name}
            </p>
            <p className=" md:text-lg font-thin text-sm">${product.price}</p>
            <Rating value={product.rating}>
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
              <Rating.Item name="rating-1" className="mask mask-star" />
            </Rating>
          </div>
          <Button
            className="mt-auto w-32"
            color="success"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold my-10">Additional Details</h2>
        <div className="border-2 w-72 md:w-96" />
        <div className="flex my-4 min-h-10 w-72 md:w-96 justify-between">
          <p className="text-xl font-semibold text-red-500 font-sans">Type</p>
          <p className="text-lg">{product.type}</p>
        </div>
        <div className="border-2 w-72 md:w-96" />
        <div className="flex my-4 min-h-10 w-72 md:w-96 justify-between">
          <p className="text-xl font-semibold text-red-500 font-sans">Brand</p>
          <p className="text-lg">{product.brand_name}</p>
        </div>
        <div className="border-2 w-72 md:w-96" />
        <div className="flex my-4 min-h-10 w-72 md:w-96 justify-between">
          <p className="text-xl font-semibold text-red-500 font-sans">
            Description
          </p>
          <p className="text-lg">{product.description}</p>
        </div>
        <div className="border-2 w-72 md:w-96" />
      </div>
    </div>
  );
};

export default ProductDetails;
