import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/whiteLogo.png";
import twitter from "../../../assets/TwitterLogo.png";
import linkedIn from "../../../assets/LinkedinLogo.svg";
import insta from "../../../assets/InstagramLogo.png";
import facebook from "../../../assets/FacebookLogo.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="vvaly" />
        <ul className={styles.socials}>
          {/* <li>
            <img src={facebook} alt="facebook" />
          </li> */}
          <li>
            <a
              target="_blank"
              href="
            https://www.instagram.com/vvaly.app/"
            >
              <img src={insta} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/vvalyapp/"
            >
              <img src={linkedIn} alt="linkedin" />
            </a>
          </li>
          {/* <li>
            <img src={twitter} alt="twitter" />
          </li> */}
        </ul>
      </div>
      <p>Terms of Service</p>
    </div>
  );
};

export default Footer;
