import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../UI/TopNav/TopNav";

const Layout = () => {
  return (
    <div>
      Layout
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
