import React from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
