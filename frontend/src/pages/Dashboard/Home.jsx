
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import DashHeadExpositor from "../../components/dashhead/dashHeadExpositor";
import SidebarExpo from "../../components/sidebar/SidebarExpo";

const Dashboard = () => {
  return (
    <div className="home">
      <SidebarExpo />
      <div className="homeContainer">
        <Navbar />

        <div className="charts">
          <DashHeadExpositor />
        </div>

        <Table />

      </div>
    </div>
  );
};

export default Dashboard;
