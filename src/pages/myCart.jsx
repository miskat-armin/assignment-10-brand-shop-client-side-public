import React, { useEffect, useState } from "react";
import CartCard from "../components/Card/cartCard";
import { useAuth } from "../context/authContext";

const MyCart = () => {
  const { user } = useAuth();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + `/carts/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user?.uid]);

  return (
    <div className="flex justify-center flex-wrap">
      {items.length > 0 ? (
        items.map((item, index) => {
          return <CartCard key={index} cartItem={item} />;
        })
      ) : (
        <div className="mt-20">
          <img src="/empty.svg" alt="empty" className="max-w-[250px] md:max-w-sm" />
          <p className="text-lg text-center mt-4">No Data found</p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
