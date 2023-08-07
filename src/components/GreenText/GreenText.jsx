import React from "react";
import styles from "./styles.module.scss";
const Greentext = () => {
  const text =
    "GET IN TOUCH / GET IN TOUCH / GET IN TOUCH /GET IN TOUCH / GET IN TOUCH / GET IN TOUCH /";
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export default Greentext;
