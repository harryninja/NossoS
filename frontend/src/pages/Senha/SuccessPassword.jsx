import "./PasswordStyle.css";
import { Navigation } from "../../components/home/Navigation";
import frame from "../../images/Frame-124.png";

const SuccessPassword = () => {
  return (
    <div className="resetarSenhaDiv">
      <Navigation />
      <div className="frameDiv">
        <div className="eSQUECIASENHASENHA">
          <span style={{ color: "#09B001" }}>SUCESSO!</span>
          <div className="weveDevelopedAnEffectiveP">
            <p className="weveDevelopedAn">
              We’ve developed an effective personal strategy for everyone who
              wants to take immediate and.
            </p>
          </div>
        </div>
        <div className="areas-field frame-success">
          <img src={frame} alt="" />
          <a href="/login">
            <button className="btn-pass">Enviar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPassword;
