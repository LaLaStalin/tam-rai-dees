import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Navbar/sidebar";
import Footer from "../components/Footer/footer";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Navbar isSetMobile={setMobile} getMobile={mobile} />
      {props.children}

      <Sidebar isSetMobile={setMobile} getMobile={mobile} />
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
