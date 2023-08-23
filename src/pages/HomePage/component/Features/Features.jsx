import React from "react";
import { features } from "../../../../mock/mockData";
import styles from "./styles.module.scss";
import phone from "../../../../assets/rightPhoneImg.png";
const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftInfo}>
        <div className={styles.header}>
          <div>
            <h3>Features</h3>
            <h1>WE VALUE YOUR FINANCIAL WELLNESS</h1>
          </div>
          <ul className="nestedScroll">
            {features.map((item) => (
              <li>
                <>
                  <p className={styles.title}>
                    <span>
                      <img src={item.icon} alt="icon" />
                    </span>

                    {item.title}
                  </p>
                  <p className={styles.text}>
                    {item.text}
                    <span>
                      <a href="#">Details</a>
                    </span>
                  </p>
                </>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.rightImg}>
        <img src={phone} alt="background image" />
      </div>
    </div>
  );
};

export default Features;
