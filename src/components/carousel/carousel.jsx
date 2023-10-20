import PropTypes from 'prop-types';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselAd = ({ brand }) => {
  return (
    <Carousel autoPlay interval={3000} axis="horizontal" swipeable infiniteLoop showStatus={false} showThumbs={false}  className="md:h-[80vh] rounded-box">
      <div>
        <img src={`/images/ads/${brand}/1.jpg`} draggable={false} alt="Fruits" className="md:h-[80vh] rounded-box"/>
      </div>
      <div>
        <img src={`/images/ads/${brand}/2.jpg`} draggable={false} alt="Fruits" className="md:h-[80vh] rounded-box"/>
      </div>

      <div>
        <img src={`/images/ads/${brand}/3.jpg`} draggable={false} alt="Fruits" className="md:h-[80vh] rounded-box"/>
      </div>
    </Carousel>
  );
};

CarouselAd.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default CarouselAd;
