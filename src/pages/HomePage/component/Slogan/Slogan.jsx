import React from "react";
import styles from "./styles.module.scss";
import phone from "../../../../assets/phoneScreen.png";
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h1>We value your financial wellness. </h1>
      <p>
        VVALY is a revolutionary budget management app that empowers you to take
        control of your finances and make informed financial decisions.
      </p>
      <img src={phone} alt="app photo" />
    </div>
  );
};

export default Slogan;
