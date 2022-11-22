import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner from "../../images/img-banner-home.png";
import banner2 from "../../images/img-banner-home2.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide = () => {
  return (
    <>
      <div className="container-1">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
