import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${brand.brand_name}/products`, {state:{ brand_name: brand.brand_name}})
  }

  return (
    <div onClick={handleCardClick} className="card card-compact max-w-xs shadow-xl hover:scale-105 transform transition duration-300 bg-slate-50 dark:bg-slate-800 cursor-pointer">
      <figure>
        <img
          src={brand.brand_image}
          alt="Shoes"
          draggable={false}
          className="w-full h-48 object-contain"
        />
      </figure>
      <div className="card-body flex items-center">
        <h2 className="card-title text-2xl">{brand.brand_name}</h2>
      </div>
    </div>
  );
};

export default BrandCard;
