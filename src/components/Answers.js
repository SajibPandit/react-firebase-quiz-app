import React from "react";
import styles from "../styles/Answers.module.css";
import Checkbox from "../components/Checkbox";

function Answers() {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="Test answer" />
    </div>
  );
}

export default Answers;
