import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/banner";
import BrandCard from "../components/Card/brandCard";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/Card/reviewCard";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const ref = useRef(null);

  const reviews = useLoaderData()

  const handleBannerBtnClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_EXPRESS_API + "/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Banner handleBannerBtnClick={handleBannerBtnClick}/>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {brands.length > 0 &&
          brands.map((brand, idx) => {
            return <BrandCard key={idx} brand = {brand}/>;
          })}
      </div>
      <p className="text-3xl md:text-5xl font-bold font-serif">Customer&apos;s reviews</p>
      <p className="text-xl md:text-2xl font-light text-center">What our customers are saying about us</p>
      <div className="flex flex-col gap-4 mt-10">
          {
            reviews.map((review, idx) => {
              return(
                <ReviewCard key={idx} review = {review} />
              )
            })
          }
      </div>
    </div>
  );
};
export default Home;
