import React from "react";
import styles from "./styles.module.scss";
function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>HAVE WE SPARKED YOUR INTEREST?</h1>
        <p>example@gmail.com</p>
        <p className={styles.phone}>+994 50 123 45 67</p>
        <ul>
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactPage;
