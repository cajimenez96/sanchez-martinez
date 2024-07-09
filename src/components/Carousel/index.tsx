import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card, { CardBody } from "../Card";
import { IPost } from "../../api/Post";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  children?: ReactNode;
  elements?: IPost[];
}

const Carousel: React.FC<CarouselProps> = ({children, elements}) => {

  return (
    <Swiper
      breakpoints={{
        425: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Navigation]}
      navigation={true}
    >
      {children}
      {elements?.map((e, index) => (
        <SwiperSlide key={index}>
          <Card className="h-96 overflow-hidden mx-auto">
            <CardBody
              text={e.content}
              image={e.front}
              date={e.updatedAt.toString()}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
