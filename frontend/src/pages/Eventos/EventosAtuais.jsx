import { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import Eventos from "../../components/eventos/EventosAtuais";
import "../../App.css";
import { Navigation } from "../../components/home/Navigation";
import { Footer } from "../../components/home/Footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const EventosAtuais = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <Eventos data={landingPageData.Eventos} />
      <Footer />
    </div>
  );
};

export default EventosAtuais;
