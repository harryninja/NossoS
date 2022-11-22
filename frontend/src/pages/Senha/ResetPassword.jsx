import "./PasswordStyle.css";
import React from 'react'
import axios from "axios";
import { Navigation } from "../../components/home/Navigation";

const ResetPassword = () => {

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
          <h2>
            <span>RESETAR </span>
            <span style={{ color: "orange" }}>SENHA</span>
          </h2>

        </div>
        <div className="areas-field">
          <input placeholder="Digite a sua nova senha" className="input-email" type="email" required autoFocus />
        </div>
        <div className="areas-field confirm-pass">
          <input placeholder="Repita a senha" className="input-email" type="email" required autoFocus />
          <a href="/success-password">
            <button className="btn-pass">Salvar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
