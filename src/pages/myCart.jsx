import React, { useEffect, useState } from "react";
import CartCard from "../components/Card/cartCard";
import { useAuth } from "../context/authContext";

const MyCart = () => {
  const { user } = useAuth();

  const [ items, setItems ] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + `/carts/${user?.uid}`)
    .then( res => res.json())
    .then(data => setItems(data));
  }, [user?.uid]);

  return (
    <div>
      {
        items.length > 0 &&
        items.map((item, index) => {
          return(
            <CartCard key={index} cartItem={item}/>
          )
        })
      }
    </div>
  )
};

export default MyCart;
