import { Image } from "../home/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Link } from "react-router-dom";

export const Eventos = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title1 events">
          <h2>Conheça os eventos do momento</h2>
        </div>
        <div className="container-2">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="row">
              <div className="portfolio-items">
                {props.data
                  ? props.data.map((d, i) => (
                      <SwiperSlide key={`${d.title}-${i}`}>
                        <div key={`${d.title}-${i}`} className="img-events">
                          <Image
                            title={d.title}
                            largeImage={d.largeImage}
                            smallImage={d.smallImage}
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  : "Loading..."}
              </div>
            </div>
          </Swiper>
          <Link to="/eventos-atuais">
            <button className="ver-mais">ver mais</button>
          </Link>
        </div>
        <div className="container-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="row">
              <div className="portfolio-items">
                {props.data
                  ? props.data.map((d, i) => (
                      <SwiperSlide key={`${d.title}-${i}`}>
                        <div key={`${d.title}-${i}`} className="img-events">
                          <Image
                            title={d.title}
                            largeImage={d.largeImage}
                            smallImage={d.smallImage}
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  : "Loading..."}
              </div>
            </div>
          </Swiper>
          <Link to="/eventos-atuais">
            <button className="ver-mais">ver mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
