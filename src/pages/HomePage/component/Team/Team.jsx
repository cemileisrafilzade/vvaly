import React, { useState, useEffect } from "react";
import { mentors, team } from "../../../../mock/mockData";
import styles from "./styles.module.scss";
import linkedin from "../../../../assets/LinkedinLogo.svg";

const Team = () => {

  const [mentor, setMentor] = useState(mentors[0]);
  const handleSlider = () => {
    mentor === mentors[0] ? setMentor(mentors[1]) : setMentor(mentors[0]);
  };
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
        <div onClick={() => handleSlider()} className={styles.navBtns}>
          {"<"}
        </div>

        <>
          <div className={styles.imgCard}>
            <img src={mentor.image} alt="" />
            <a
              target="_blank"
              href={mentor.linkedin}
              className={styles.linkedinLink}
            >
              <img src={linkedin} />
            </a>
            <h1>{mentor.name}</h1>
            <p>{mentor.mission}</p>
          </div>
          <div className={styles.mentorTxt}>
            <h5>our mentor</h5>
            <p>{mentor.text}</p>
          </div>
        </>

        <div onClick={() => handleSlider()} className={styles.navBtns}>
          &#62;
        </div>
      </div>
    </div>
  );
};

export default Team;
