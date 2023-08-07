import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/whiteLogo.png";
import twitter from "../../../assets/TwitterLogo.png";
import linkedIn from "../../../assets/LinkedinLogo.png";
import insta from "../../../assets/InstagramLogo.png";
import facebook from "../../../assets/FacebookLogo.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="vvaly" />
        <ul className={styles.socials}>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={insta} alt="instagram" />
          </li>
          <li>
            <img src={linkedIn} alt="lonkedin" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
        </ul>
      </div>
      <p>Terms & Conditions</p>
    </div>
  );
};

export default Footer;
