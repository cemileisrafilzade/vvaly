import React from "react";
import { team } from "../../mock/mockData";
import styles from "./styles.module.scss";
import linkedin from "../../assets/LinkedinLogo.png";
const Team = () => {
  return (
    <div className={styles.container}>
      <h2>Our Team</h2>
      <h1>TAKE YOUR FINANCIAL WELLNESS TO THE NEXT LEVEL</h1>

      <div className={styles.wrapper}>
        {team.map((item) => (
          <div className={styles.member}>
            <p style={{ color: item.color }}>{item.major}</p>
            <h4>{item.name}</h4>
            <div className={styles.imgWrapper}>
              <img className={styles.linkedin} src={linkedin} alt="linkedin" />
              <img className={styles.memberImg} src={item.img} alt="out team" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
