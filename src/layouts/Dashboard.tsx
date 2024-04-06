import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegisterPlace from "../components/register/RegisterPlace";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="layout_screen">
      <Header />
      <div className="layout_wrapper layout_flexRow">
        <div className="layout_sidebar"></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
