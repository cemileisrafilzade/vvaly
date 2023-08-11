import React from "react";
import styles from "./styles.module.scss";
import first from "../../assets/Polygon1.png";
import hexa from "../../assets/Polygon3.png";
import five from "../../assets/Polygon2.png";
const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstWrapper}>
        <div>
          <h5>About us</h5>
          <h1>WHO WE ARE?</h1>
        </div>
        <p>
          VValy is a revolutionary budget management app that empowers you to
          take control of your finances and make informed financial decisions.
          Say goodbye to the stress of money management and hello to a new, fun
          and rewarding financial journey!
        </p>
      </div>
      <ul>
        <li>
          <img src={first} alt="our mission" />
          <h3>Our mission</h3>
          <p>
            Our mission is to create a stress-free platform for managing budgets
            mindfully, enriching the financial journey for our users
          </p>
        </li>
        <li>
          <img src={five} alt="commitment" />
          <h3>Commitment to Customers</h3>
          <p>
            We foster a customer-centric culture through smart recommendations.
          </p>
        </li>
        <li>
          <img src={hexa} alt="vision" />
          <h3>OUR VISION</h3>
          <p>
            We are reliable and the first choice is to be a financial AI buddy
            provider to  our customers.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhoWeAre;
