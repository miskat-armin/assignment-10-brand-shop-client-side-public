import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/banner";
import BrandCard from "../components/Card/brandCard";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const ref = useRef(null);

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
          brands.map((brand) => {
            return <BrandCard brand = {brand}/>;
          })}
      </div>
    </div>
  );
};
export default Home;
