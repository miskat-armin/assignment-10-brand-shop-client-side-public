import PropTypes from 'prop-types';
import { Button, Rating } from "react-daisyui";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${product.brand_name}/${product.name}`);
  };

  const handleUpdateClick = () => {
    navigate(`/update/${product.brand_name}/${product._id}`);
  };

  return (
    <div className="card card-compact w-72 xl:w-96 bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
      <figure>
        <img src={product.image} alt="brands" className="h-48 object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{product.name}</h2>
        <p className="text-sm text-gray-600">${product.price}</p>
        <Rating value={product.rating}>
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
          <Rating.Item name="rating-1" className="mask mask-star" />
        </Rating>
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold text-left">
            Brand: {product.brand_name}
          </p>
          <p className="text-lg font-semibold text-right">
            Type: {product.type}
          </p>
        </div>
        <div className="card-actions justify-between">
          <Button
            variant="outline"
            color="ghost"
            size="sm"
            onClick={handleUpdateClick}
          >
            Update details
          </Button>
          <Button
            variant="outline"
            size="sm"
            color="ghost"
            onClick={handleCardClick}
          >
            More details
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    brand_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
};

export default ProductCard;
