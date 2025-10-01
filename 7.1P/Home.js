import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import backImage from "../images/back.jpg"; 

function Home() {
  return (
    <nav
      className={styles.navbar}
      style={{ backgroundImage: `url(${backImage})` }} 
    >
      <div className={styles.logo}>DEV@Deakin</div>
      <input className={styles.search} type="text" placeholder="Search..." />
      <div className={styles.actions}>
        <Link to="/" className={styles.navItem}>Post</Link>
        <Link to="/login" className={styles.navItem}>Login</Link>
      </div>
    </nav>
  );
}

export default Home;
