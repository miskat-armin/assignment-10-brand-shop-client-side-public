const BrandCard = ({ brand }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transform transition duration-300 ">
      <figure>
        <img
          src={brand.brand_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand.brand_name}</h2>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
