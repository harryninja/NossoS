import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import DashHeadPromotor from "../../components/dashhead/dashHeadPromotor";
import Eventos from "../../components/DashboardPromotorComponents/Eventos";

const DashboardPromotor = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <DashHeadPromotor />
        </div>
        <div className="widgets">
          <Eventos type="user" />
          <Eventos type="order" />
          <Eventos type="earning" />
          <Eventos type="balance" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPromotor;
