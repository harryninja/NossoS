import "./PasswordStyle.css";
import { Navigation } from "../../components/home/Navigation";
import React from 'react'
import axios from "axios";

const ForgetPassword = () => {

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const handleOpen = (e) => {
    axios
    .get(`http://localhost:3001/briefings/briefing/${e.target.value}`)
      .then((res) => {
        setModalData(res.data.briefing)
        console.log(modalData)
      setOpen(true);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="resetarSenhaDiv">
      <Navigation />
      <div className="frameDiv">
        <div className="eSQUECIASENHASENHA">
          <span>ESQUECI A</span>
          <span style={{ color: "orange" }}> SENHA</span>

        </div>
        <div className="areas-field">
          <input placeholder="Digite o seu e-mail" className="input-email" type="email" required autoFocus />
          <a href="/reset-password">
            <button className="btn-pass">Enviar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
