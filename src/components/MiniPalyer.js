import React from "react";
import styles from "../styles/MiniPlayer.module.css";
import Image from "../assets/images/3.jpg";

function MiniPalyer() {
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={Image} alt="img" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

export default MiniPalyer;
