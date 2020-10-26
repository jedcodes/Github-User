import React from "react";
import { DashboardNav, Header, MiddelBody, UpperBody } from "../../Components";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <Header />
      <UpperBody />
      <MiddelBody />
    </div>
  );
};

export default Dashboard;
