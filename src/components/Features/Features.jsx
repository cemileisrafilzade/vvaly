import React from "react";
import { features } from "../../mock/mockData";
import styles from "./styles.module.scss";
import phone from "../../assets/rightPhoneImg.png";
const Features = () => {
  const first = features.slice(0, features.length / 2);
  const second = features.slice(features.length / 2, features.length);

  return (
    <div className={styles.container}>
      <div className={styles.leftInfo}>
        <div className={styles.header}>
          <div>
            <h3>Features</h3>
            <h1>WE VALUE YOUR FINANCIAL WELLNESS</h1>
          </div>
          <ul>
            {first.map((item) => (
              <li>
                <>
                  <p className={styles.title}>
                    <span>
                      <img src={item.icon} alt="" />
                    </span>

                    {item.title}
                  </p>
                  <p className={styles.text}>
                    {item.text}
                    <span>
                      <a href="">Details</a>
                    </span>
                  </p>
                </>
              </li>
            ))}

            {/* <li>
          {second.map((item) => (
            <>
              <p className={styles.title}>
                <span>
                  <img src={item.icon} alt="" />
                </span>
                {item.title}
              </p>
              <p className={styles.text}>{item.text}</p>
            </>
          ))}
        </li>  */}
          </ul>
        </div>
      </div>
      <div className={styles.rightImg}>
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Features;
