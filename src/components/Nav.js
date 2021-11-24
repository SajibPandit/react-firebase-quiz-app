import React from "react";
import Account from "./Account";
import styles from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="Logo" />
            <h3>React Firebase Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
