import React from 'react'
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.twoColumns}>
        <div className={styles.copyRight}>
            Copyright © 2023 <span className={styles.teal}>Waleed</span>.  All Rights Reserved.
        </div>
        <div>
            <a className={styles.terms}>
            Terms & Policy
            </a>
            <a>
            Disclaimer
            </a>
        </div>    
    </div>
  )
}

export default Footer