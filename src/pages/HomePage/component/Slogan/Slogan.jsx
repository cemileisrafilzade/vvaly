import React from "react";
import styles from "./styles.module.scss";
import phone from "../../../../assets/phoneScreen.png";
import down from "../../../../assets/icons/down.svg";
import shadow from '../../../../assets/shadow.png'
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h1>We value your financial wellness. </h1>
      <div>

      <p>

        VVALY is a revolutionary budget management app that empowers you to take
        control of your finances and make informed financial decisions.
        {/* <div className={styles.down}>
          <img src={down} alt="" />
        </div> */}

      </p>
      <img src={shadow} alt="" />
        </div>
      <img src={phone} alt="app photo" />
    </div>
  );
};

export default Slogan;
