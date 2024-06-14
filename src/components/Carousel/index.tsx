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
      className="hidden md:block absolute -right-4 bottom-[50%] z-50 text-crema"
      onClick={onClick}
    >
      <BiSolidRightArrow size={30} />
    </button>
  );
}

const PrevArrow = ({onClick}: CustomArrowProps) => {
  return (
    <button
      className="hidden md:block absolute -left-4 bottom-[50%] z-50 text-crema cursor-pointer"
      onClick={onClick}
    >
      <BiSolidLeftArrow size={30} />
    </button>
  );
}

const Carousel = ({children}: CarouselProps) => {

  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true,
          appendDots: (dots: any) => (
            <ul style={{display: "flex", justifyContent: "center", gap: 20, position: 'absolute', top: '-35px', height: 25}}>
              {dots}
            </ul>
          ),
          customPaging: () => (
            <li
              style={{
                color: 'var(--color-crema)',
                width: 10,
                height: 10,
                backgroundColor: "var(--color-crema)",
                borderRadius: 10,
                transition: "all 0.3s ease"
              }}
            >
            </li>
          )
        }
      }
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Slider {...settings} className="w-full md:px-5">
        {children}
      </Slider>
    </div>
  );
}

export default Carousel;
