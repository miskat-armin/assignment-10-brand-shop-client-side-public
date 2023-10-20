import { Carousel } from "react-daisyui";

const CarouselAd = ({brand}) => {
  return (
    <Carousel width="full" display="sequential" className="rounded-box h-auto lg:h-[80vh]">
      <Carousel.Item
        src={`/images/ads/${brand}/1.jpg`}
        alt="Fruits"
      />
      <Carousel.Item
        src={`/images/ads/${brand}/2.jpg`}
        alt="Fruits"
      />
      <Carousel.Item
        src={`/images/ads/${brand}/3.jpg`}
        alt="Fruits"
      />
    </Carousel>
  );
};

export default CarouselAd;
