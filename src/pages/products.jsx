import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/Card/productCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    window.scrollTo(0, 0)

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
    <div className="flex flex-col items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 &&
          products.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
