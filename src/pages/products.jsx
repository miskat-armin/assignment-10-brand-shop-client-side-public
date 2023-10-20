import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/Card/productCard";
import CarouselAd from "../components/carousel/carousel";

const Products = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window.scrollTo(0, 0);

    fetch(import.meta.env.VITE_EXPRESS_API + `/products/${params?.brand}`, {
      signal: signal,
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));

    return () => {
      controller.abort();
    };
  }, [params.brand]);

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto">
      <CarouselAd brand={params.brand} />
      <h2 className="text-3xl lg:text-5xl font-bold font-serif mt-10">
        Products
      </h2>
      <p className="text-xl lg:text-2xl font-semibold text-center mb-10">
        Explore Our Finest Tech Products
      </p>
      <div className="flex flex-row flex-wrap gap-4 mb-10">
        {products.length > 0 ? (
          products.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })
        ) : (
          <div>
            <img src="/empty.svg" alt="empty" className="max-w-sm" />
            <p className="text-lg text-center mt-4">No Data found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
