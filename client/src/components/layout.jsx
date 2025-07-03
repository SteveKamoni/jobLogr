import React, { useState } from "react";
import Sidebar from "./sidebar";
import "./layout.css";

function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`layout-wrapper ${isCollapsed ? "collapsed" : ""}`}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
