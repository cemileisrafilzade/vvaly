import React from "react";
import { team } from "../../mock/mockData";
import styles from "./styles.module.scss";
import linkedin from "../../assets/LinkedinLogo.svg";
import zaur from "../../assets/zaur.jpg";
const Team = () => {
  return (
    <div className={styles.container}>
      <h2>Our Team</h2>
      <h1>TAKE YOUR FINANCIAL WELLNESS TO THE NEXT LEVEL</h1>

      <div className={styles.wrapper}>
        {team.map((item) => (
          <div className={styles.member}>
            <div
              style={{ backgroundColor: item.color }}
              className={styles.cover}
            ></div>
            <p style={{ color: item.color }}>{item?.major}</p>
            <h4>{item?.name}</h4>
            <div className={styles.imgWrapper}>
              <a target="_blank" href={item?.link}>
                <img
                  className={styles.linkedin}
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <img className={styles.memberImg} src={item.img} alt="out team" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mentor}>
        <div className={styles.navBtns}>{"<"}</div>
        <div className={styles.imgCard}>
          <img src={zaur} alt="" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/zaur-alakbarov-b8474621/"
            className={styles.linkedinLink}
          >
            <img src={linkedin} />
          </a>
          <h1>ZAUR ALAKBAROV</h1>
          <p>Adviser to the Chairman of the Management Board</p>
        </div>
        <div className={styles.mentorTxt}>
          <h5>our mentor</h5>
          <p>
            Zaur Alakbarov - Adviser to the Chairman of the Management Board at
            international Bank Of Azerbaijan Zaur has a diverse track record and
            over 15 years of professional experience in entrepreneurship,
            innovation, fintech and conventional banking. Currently leading open
            innovation initiatives of ABB Bank. He holds an MBA degree from the
            IMD Business School in Switzerland and bachelor degree in economics
            from the University of Economics of Azerbaijan.
          </p>
        </div>
        <div className={styles.navBtns}>&#62;</div>
      </div>
    </div>
  );
};

export default Team;
