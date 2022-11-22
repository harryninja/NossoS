import SidebarMontador from "../../components/sidebar/SidebarMontador";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Opcoes from "../../components/DashboardMontadorComponents/Opcoes";
import Table from "../../components/table/Table";
import DashHeadMontador from "../../components/dashhead/dashHeadMontador";
import FluxoGestor from "../../components/gestor/gestor";

const DashboardMontador = () => {
  return (
    <div className="home">
      <SidebarMontador />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <DashHeadMontador />
        </div>
        <FluxoGestor />
        <div className="widgets">
          <Opcoes type="user" />
          <Opcoes type="order" />
          <Opcoes type="earning" />
          <Opcoes type="balance" />
        </div>
      </div>
    </div>
  );
};

export default DashboardMontador;
