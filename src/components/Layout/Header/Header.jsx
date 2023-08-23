import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../../assets/blackLogo.svg";
const Header = () => {
  const location = useLocation().pathname;

  return (
    <div
      className={location === "/" ? styles.container : styles.whiteContainer}
    >
      <img
        src={location === "/" ? Logo : BlackLogo}
        alt="../../assests/Logo.svg"
      />
      <ul>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>

        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
