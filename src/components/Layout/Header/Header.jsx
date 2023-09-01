import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../../assets/blackLogo.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import cancelIcon from "../../../assets/icons/cancel.svg";
const Header = () => {
  const location = useLocation().pathname;
  const [openedBurger, setOpenedBurger] = useState(false);
  return (
    <div
      className={location === "/"||"/features" ? styles.container : styles.whiteContainer}
    >
      <img
        className={styles.logo}
        src={location === "/" ||"/features"? Logo : BlackLogo}
        alt="../../assests/Logo.svg"
      />

      <ul className={styles.desktopList}>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>

        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div
        onClick={() => setOpenedBurger(!openedBurger)}
        className={styles.mobileBurgerMenu}
      >
        <div className={styles.icon}>
          <img src={openedBurger ? cancelIcon : MenuIcon} />
        </div>
        {openedBurger && (
          <ul className={location === "/" ? styles.black : styles.white}>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>

            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
