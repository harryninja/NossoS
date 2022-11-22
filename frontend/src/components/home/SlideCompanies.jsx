import bio from "../../images/bio_specialist_logo.png";
import ares from "../../images/logo_ares.png";
import ekaut from "../../images/logo_ekaut.png";
import wvegan from "../../images/logo_wvegan.png";

const SlideCompanies = () => {
  return (
    <div className="slider" id="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={bio} alt="" />
        </div>
        <div className="slide">
          <img src={ares} alt="" />
        </div>
        <div className="slide">
          <img src={ekaut} alt="" />
        </div>
        <div className="slide">
          <img src={wvegan} alt="" />
        </div>
        {/* double sildes */}
        <div className="slide">
          <img src={bio} alt="" />
        </div>
        <div className="slide">
          <img src={ares} alt="" />
        </div>
        <div className="slide">
          <img src={ekaut} alt="" />
        </div>
        <div className="slide">
          <img src={wvegan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SlideCompanies;
