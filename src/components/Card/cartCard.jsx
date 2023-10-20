import { Button, Rating } from "react-daisyui";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

const CartCard = ({cartItem, getCartData}) => {

  console.log(cartItem)
  const handleDelete = () => {
    fetch(import.meta.env.VITE_EXPRESS_API + `/carts/delete/${cartItem._id}`,{
      method:"Delete"
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) toast.error("Failed to delete");
        else {
          getCartData()
          toast.success("Deleted successfully");
        }
    })
    .catch(e => console.log(e))
  }

  return (
    <div className="card card-compact w-72 xl:w-96 bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
    <figure>
      <img src={cartItem.image} alt="brands" className="h-48 object-contain" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-3xl">{cartItem.name}</h2>
      <p className="text-sm text-gray-600">${cartItem.price}</p>
      <Rating value={cartItem.rating}>
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
      </Rating>
      <div className="flex w-full justify-between">
        <p className="text-lg font-semibold text-left">
          Brand: {cartItem.brand_name}
        </p>
        <p className="text-lg font-semibold text-right">
          Type: {cartItem.type}
        </p>
      </div>
      <div className="card-actions justify-end">
        <Button onClick={handleDelete} className="bg-red-600 text-white">Delete</Button>

      </div>
    </div>
  </div>
  );
};

CartCard.propTypes = {
  cartItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    brand_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  getCartData: PropTypes.func.isRequired,
};

export default CartCard;
