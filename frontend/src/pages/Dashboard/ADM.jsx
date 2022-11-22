import SidebarADM from "../../components/sidebar/sidebarADM";
import Navbar from "../../components/navbar/Navbar";
import "./ADM.css";
import DashHeadADM from "../../components/dashhead/dashHeadADM";
import Briefings from "../../components/DashboardADM/Briefings";
import { useState } from "react";

const ADM = () => {


  return (
    <div className="home">
      <SidebarADM />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <DashHeadADM />
        </div>
        <Briefings />
      </div>
    </div>
  );
};

export default ADM;
