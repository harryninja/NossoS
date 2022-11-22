import "./sidebarMontador.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import Logo from '../../images/logo-NS-1.png'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';


const SidebarMontador = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="tittle">DASH</p>
          <li>
           <HomeIcon className="icone"/> <span>ADM montador</span>
          </li>
          <p className="tittle">FLUXOS</p>
          <Link className="Link" to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneOutlinedIcon className="icone" />
              <span>Solicitações de stands</span>
            </li>
          </Link>
          <Link className="Link" to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutlineOutlinedIcon className="icone" />
              <span>Contrato Aprovado</span>
            </li>
          </Link>
          <p className="tittle">PAGES</p>

          <li>
            <PersonAddAlt1OutlinedIcon className="icone" />
            <span>Editar Perfil</span>
          </li>


          <p></p>
          <li className="botao">
<button className="botaoVerde">CHAT</button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default SidebarMontador;
