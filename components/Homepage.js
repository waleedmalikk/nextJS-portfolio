import React from "react";
import styles from "../styles/homepage.module.css"
import WritingEffect from "./Typewriter";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h3 className={styles.h3} >Welcome</h3>
        <div className={styles.h1}>
          < WritingEffect/>
        </div>
        <h4 className={styles.h4} >based in Lahore, Pakistan.</h4>
        <a href="https://www.linkedin.com/in/waleedmalikk" target="_blank" rel="noopener noreferrer" className={styles.button}>Hire Me</a>
      </div>
    </div>
  )
};

export default Homepage;