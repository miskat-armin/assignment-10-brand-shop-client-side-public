import PropTypes from 'prop-types';

const Banner = ({ handleBannerBtnClick }) => {
  const handleClick = () => {
    handleBannerBtnClick();
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Your Digital Playground
          </h1>
          <p className="mb-5">
            Explore an Infinite Array of Brands, Unleash Your Tech Fantasies,
            and Elevate Your Digital Experience to New Heights
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};


Banner.propTypes = {
  handleBannerBtnClick: PropTypes.func.isRequired,
};

export default Banner;
