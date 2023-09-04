import React from "react";
import styles from "./styles.module.scss";
import first from "../../assets/about/first.svg";
import second from "../../assets/about/second.svg";
import last from "../../assets/about/last.svg";
import third from "../../assets/about/third.svg";
function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteSection}>
        <h1>WHO WE ARE?</h1>
        <p>
          VValy is a revolutionary budget management app that empowers you to
          take control of your finances and make informed financial
          decisions. Say goodbye to the stress of money management and hello to
          a new, fun, and rewarding financial journey!
        </p>
      </div>
      <div className={styles.blackSection}>
        <img className={styles.mainImg} src={first} alt="" />
        <div className={styles.mainTxt}>
          <h5>History</h5>
          <h1>our inspiring tale of  humble beginnings</h1>
          <p>
            In the summer heat, our dear friend Ulviya found herself facing a
            challenge during her university days. Struggling to manage her
            budget, she had developed a coffee addiction that drained her
            finances. It wasn't until after graduation that she discovered her
            bank account card was empty, prompting her curiosity to investigate
            the cause. VValy examining her receipts, the truth unraveled before
            her eyes—her excessive spending on coffee.
            <br />
            <br />
            Determined to find a solution, Ulviya embarked on a personal journey
            to save money, exploring various strategies for both card and cash.
            As she encountered friends grappling with similar financial issues,
            a spark ignited within her. She pondered, "Why not take action and
            make a difference?"
            <br />
            <br />
            Drawing inspiration from her own experiences, Ulviya gathered
            friends from diverse backgrounds who faced the same challenges.
            Together, they set out on a mission to create a platform for
            everyone striving to achieve their goals and in dire need of support
            to manage their budgets mindfully.
            <br />
            <br />
            Now, as we grow and evolve, our shared passion unites us. We take
            immense joy in pursuing our common goal—empowering individuals on
            their financial journeys. With open hearts and unwavering
            dedication, we stand united, ready to support and uplift those who
            seek guidance.
          </p>
        </div>
        <div className={styles.sliders}>
          <img className={styles.firstImg} src={second} alt="" />
          <img  className={styles.secondImg} src={first} alt="" />
          <img className={styles.thirdImg} src={third} alt="" />
        </div>
        <div className={styles.lastSection}>
          <img src={last} alt="" />
          <div>
            <h5>Our Success Story</h5>
            <p>
              In July 2022, we were honored to be selected as a successful
              startup for the prestigious Azerbaijan International Bank
              Pre-Incubation and Incubation Program, spanning an enriching
              period of approximately 10 months. Throughout this transformative
              journey, our initial idea blossomed into a tangible startup,
              fortified by meticulous market analysis, comprehensive mentorship
              and invaluable guidance from seasoned professionals in the fintech
              industry. We are immensely proud of the progress we have made and
              the refined fintech skills we have acquired, which have empowered
              us to pave a remarkable path towards success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
