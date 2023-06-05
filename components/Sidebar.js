import React from 'react'
import styles from "../styles/sidebar.module.css"
import Image from 'next/image'
import { useEffect } from 'react'

const Sidebar = ({
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onSummaryClick,
  onProjectsClick,
  onContactClick,
  activeRef,
  homeRef,
  aboutRef,
  servicesRef,
  summaryRef,
  projectsRef,
  contactRef
}) => {
  return (
    <div className={styles.container}>
        <Image className={styles.profile_pic} src="/profilePic.jpeg" alt="Profile Picture" width={175} height={175} />
        <h4 className={styles.name}>Waleed Malik</h4>
        <div> 
            <ul className={styles.verticalList}>
              <li>
                <button  
                className={activeRef === homeRef ? styles.active : ""}
                onClick={onHomeClick}>Home</button>
              </li>
              <li>
                <button 
                className={activeRef === aboutRef ? styles.active : ""}
                 onClick={onAboutClick}>About</button>
              </li>
              <li>
                <button
                className={activeRef === servicesRef ? styles.active : ""}
                onClick={onServicesClick}>Services</button>
              </li>
              <li>
                <button
                className={activeRef === summaryRef ? styles.active : ""}
                 onClick={onSummaryClick}>Summary</button>
              </li>
              <li>
                <button
                className={activeRef === projectsRef ? styles.active : ""}
                 onClick={onProjectsClick}>Projects</button>
              </li>
              <li>
                <button 
                className={activeRef === contactRef ? styles.active : ""}
                onClick={onContactClick}>Contact</button>
              </li>
            </ul>
        </div>
        <div className={styles.horizontalList}>
              <a className={styles.liAnchor} href="https://www.linkedin.com/in/waleedmalikk" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-linkedin"></span>
              </a>    
              <a className={styles.gitAnchor} href="https://github.com/waleedmalikk" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-github"></span>
              </a>
              <a className={styles.ltAnchor} href="https://leetcode.com/waleedmalikk_" target="_blank" rel="noopener noreferrer">
                <span className="fas fa-code"></span>
              </a>   
        </div>
    </div>
  )
}

export default Sidebar