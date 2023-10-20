import { useEffect, useState } from "react";
import CartCard from "../components/Card/cartCard";
import { useAuth } from "../context/authContext";

const MyCart = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([]);

  setTimeout(() => {
    setLoading(false);
  }, 50000);

  const getCartData = () => {
    fetch(import.meta.env.VITE_EXPRESS_API + `/carts/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCartData();
  }, [user?.uid]);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div className="flex justify-center flex-wrap my-10">
      {items.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {items.map((item, index) => {
            return <CartCard key={index} getCartData={getCartData} cartItem={item} />;
          })}
        </div>
      ) : (
        <div className="mt-20">
          <img
            src="/empty.svg"
            alt="empty"
            className="max-w-[250px] md:max-w-sm"
          />
          <p className="text-lg text-center mt-4">No Data found</p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
