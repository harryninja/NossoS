import { useState, useEffect } from "react";
import { Navigation } from "../../components/home/Navigation";
import { Header } from "../../components/home/Header";
import { Features } from "../../components/home/Features";
import { About } from "../../components/home/About";
import { Eventos } from "../../components/home/Eventos";
import { Testimonials } from "../../components/home/Testimonials";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../../App.css";
import SlideCompanies from "../../components/home/SlideCompanies";
import { Advantages } from "../../components/home/Advantages";
import { StartHere } from "../../components/home/StartHere";
import Contact from "../../components/home/Contact";
import { Footer } from "../../components/home/Footer";
import './Cookie.css'
import './chat.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [acceptAllCookies, setAcceptAllCookie] = useState(false);
  useEffect(() => {
    checkCookie()
    setLandingPageData(JsonData);
  }, []);

  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const acceptAllCookie = () => {
    localStorage.setItem("cookieAccepted", true)
    setAcceptAllCookie(true)
  }

  const checkCookie = () => {
    const cookies = localStorage.getItem('cookieAccepted')
    if (cookies) {
      setAcceptAllCookie(true)
    }
  }

  // Define state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define function that will open the modal
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // Define function that will close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <SlideCompanies />
        <Advantages />
        <StartHere />
        <Eventos data={landingPageData.Eventos} />
        <Testimonials data={landingPageData.Testimonials} />
        <Contact />
        <Footer data={landingPageData.Contact} />
        <button className="fixedbutton" onClick={() => handleOpen()}><ChatBubbleIcon style={{ "height": "25px", "width": "25px" }} /></button>
        {isModalOpen ? (
          <div className="chat-popup" id="myForm">
            <form action="" className="form-container">
              <h1>Chat</h1>

              <label><b>Message</b></label>
              <textarea placeholder="Type message.." name="msg" required></textarea>

              {/* <button type="submit" class="btn">Send</button> */}
              <button type="button" className="btn cancel" onClick={() => handleClose()}>Close</button>
            </form>
          </div>) : (<></>)}
      </div >
      {!acceptAllCookies ? (
        <div className="customCard">
          <p>Usaremos cookies para melhorar e personalizar sua experiência se você continuar navegando. Podemos também usar cookies para exibir anúncios personalizados?<a href="/cookies"><span> Saiba mais e gerencie seus cookies</span></a></p>
          <button className="btn-sendert" onClick={acceptAllCookie}>Sim, Concordo</button>
        </div>) : (<></>)}
    </>
  );
};

export default App;
