import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${brand.brand_name}/products`, {state:{ brand_name: brand.brand_name}})
  }

  return (
    <div className="card max-w-xs xl:max-w-sm bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
      <figure>
        <img
          src={brand.brand_image}
          alt="Shoes"
          className="w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand.brand_name}</h2>
        <div className="card-actions justify-start">
          <button onClick={handleCardClick} className="btn btn-primary">More details</button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
