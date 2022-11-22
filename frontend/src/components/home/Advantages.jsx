import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import Circle from "../../images/meio-circ-laranja-claro2.png";
import Mobile from "../../images/mobile.png";
import VideoMobile from "../../videos/mobile-video.mp4";

export const Advantages = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });
  
  return (
    <div id="advantages">
      <img src={Circle} alt="" className="circle-img" />
      <div className="container cont-1">
        <div className="row row-advt">
          <div className="col-xs-12 col-md-6 main-text2">
            <div className="about-text2">
              <h1>
                É muito <br />
                mais fácil!
              </h1>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Receba pedidos de projetos e montagens diariamente!</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Organize cada pedido dentro do nosso Gestor Nossostand.</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Negocie e receba pagamentos diretamente do cliente final.</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Alcance mais clientes em menos tempo.</p>
              </div>
            </div>
          </div>
          <div className="mob-div">
            <video ref={videoRef} type="video/x-ms-wmv" autoPlay loop muted src={VideoMobile}></video>
          </div>
        </div>
      </div>
    </div>
  );
};
