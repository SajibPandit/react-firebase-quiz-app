import React from "react";
import styles from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={styles.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            onClick={logout}
            title="Logout"
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Account;
