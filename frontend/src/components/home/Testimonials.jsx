import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../App.css";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container test-cont">
        <div className="section-title1 text-center">
          <h2>Avaliações</h2>
        </div>
        <div className="container-4">
          <Swiper
            slidesPerView={2}
            slidesPerGroup={2}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="row test-row">
              {props.data
                ? props.data.map((d, i) => (
                    <SwiperSlide key={`${d.name}-${i}`} className="col-md-6">
                      <div className="test-1">
                        <div className="testimonial">
                          <div className="testimonial-content">
                            <p>"{d.text}"</p>
                            <div className="testimonial-image">
                              <img src={d.img} alt="" />
                              <p className="testimonial-meta">&nbsp;{d.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : "loading"}
            </div>
          </Swiper>
        </div>
        <div className="container-5">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="row test-row">
              {props.data
                ? props.data.map((d, i) => (
                    <SwiperSlide key={`${d.name}-${i}`} className="col-md-6">
                      <div className="test-1">
                        <div className="testimonial">
                          <div className="testimonial-content">
                            <p>"{d.text}"</p>
                            <div className="testimonial-image">
                              <img src={d.img} alt="" />
                              <p className="testimonial-meta">&nbsp;{d.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : "loading"}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
