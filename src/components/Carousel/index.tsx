import { ReactNode } from "react";
import Slider from "react-slick";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: ReactNode;
}

interface CustomArrowProps {
  onClick?: () => void;
}

const NextArrow = ({onClick}: CustomArrowProps) => {
  return (
    <button
      className="absolute -right-4 bottom-[50%] z-50 text-crema"
      onClick={onClick}
    >
      <BiSolidRightArrow size={22} />
    </button>
  );
}

const PrevArrow = ({onClick}: CustomArrowProps) => {
  return (
    <button
      className="absolute -left-4 bottom-[50%] z-50 text-crema cursor-pointer"
      onClick={onClick}
    >
      <BiSolidLeftArrow size={22} />
    </button>
  );
}

const Carousel = ({children}: CarouselProps) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="flex justify-center">
      <Slider {...settings} className="w-[96%] px-5">
        {children}
      </Slider>
    </div>
  );
}

export default Carousel;
