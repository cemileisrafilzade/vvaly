import React from "react";
import styles from "./styles.module.scss";
import qstn from "../../assets/qstn.png";
import { faq } from "../../mock/mockData";
function Faq() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.question}>
            <img src={qstn} />
          </div>
          <p>Frequently asked questions</p>
        </div>
        <h1>Questions you might ask about our products and services.</h1>
      </div>

      <ul>
        {faq.map((item) => (
          <li key={item.id}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
