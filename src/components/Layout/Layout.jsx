import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation().pathname;
  return (
    <div>
      <Header />
      {children}
      {location !== "/contact" && <Footer />}
    </div>
  );
};

export default Layout;
