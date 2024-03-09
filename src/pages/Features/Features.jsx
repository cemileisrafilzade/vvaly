import React, { useState } from "react";
import styles from "./styles.module.scss";
import { featuresMock } from "../../mock/features";
function Features() {
  const [id, setId] = useState(1);

  const choosen = featuresMock.filter((item) => item.id === id);
// console.log(choosen[0].id===);
  return (
    <div className={styles.features}>
      <img src={choosen[0].img} alt="" />
      <div className={styles.right}>
        <h3>Features</h3>
        <h1>WE VALUE YOUR FINANCIAL WELLNESS</h1>
          <ul>
            {featuresMock.map((item) => (
              <li className={choosen[0]===item&&styles.active} key={item.id} onClick={() => setId(item.id)}>
                {item.title}
              </li>
            ))}
          </ul>

        <p>{choosen[0].paragraph}</p>
      </div>
    </div>
  );
}

export default Features;
