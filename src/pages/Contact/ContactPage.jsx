import React from "react";
import styles from "./styles.module.scss";
import shadow from "../../assets/shadow.png";
function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>HAVE WE SPARKED YOUR INTEREST?</h1>
        <p>
          <a href="mailto: vvaly.office@gmail.com">vvaly.office@gmail.com</a>
        </p>
        <p className={styles.phone}>
          <a href="tel:+48795887524">+48 795887524</a>
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/vvalyapp/"
            >
              Linkedin
            </a>
          </li>
          {/* <li>
            <a>Facebook</a>
          </li> */}
          <li>
            <a
              target="_blank"
              href="
           https://www.instagram.com/vvaly.app/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <img className={styles.shadow} src={shadow} alt="" />
    </div>
  );
}

export default ContactPage;
