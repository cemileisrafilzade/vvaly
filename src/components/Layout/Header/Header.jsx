import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/Logo.svg";
// import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="../../assests/Logo.svg" />
      <ul>
        <li>
          <a to="/">About us</a>
        </li>
        <li>
          <a to="/">Features</a>
        </li>

        <li>
          <a to="/">Blog</a>
        </li>
        <li>
          <a to="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
