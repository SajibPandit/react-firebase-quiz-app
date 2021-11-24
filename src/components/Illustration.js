import React from "react";
import signupSvg from "../assets/images/signup.svg";
import styles from "../styles/Illustration.module.css";

function Illustration() {
  return (
    <div className={styles.illustration}>
      <img src={signupSvg} alt="signupSvg" />
    </div>
  );
}

export default Illustration;
