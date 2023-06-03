import React from 'react'
import styles from "../styles/aboutme.module.css"
import Container from './Container'
import Title from './Title'

const Aboutme = () => {
  return (
    <Container>
      <Title title={"About Me"}/>
        <div className={styles.infoContainer}>
          <div>
          <h4 className={styles.heading}>
          I'm Waleed Malik, a Full-Stack Developer
          </h4>
          <p className={styles.para}>
          As a skilled Full-Stack Developer with experience in a variety of technologies, including React, Angular, Bootstrap, MongoDB, PostgreSQL, JavaScript, Node.js, HTML, and CSS, I have contributed to the development and maintenance of numerous MEAN/MERN web applications.
          </p>
          <p className={styles.para}>
          With a focus on creating efficient user experiences, I have integrated data from various back-end services and databases, consistently delivering high-quality, maintainable, and reusable code.
          </p>
          </div>
          <div className={styles.list}>
           <li className={styles.li}>
           Name: Waleed Malik
           </li >
           <div className={styles.smallBarGrey}></div>
           <li className={styles.li}>
          Email: waleedmalik2010@gmail.com
           </li>
           <div className={styles.smallBarGrey}></div>
           <li className={styles.li}>
          Age: 24
           </li>
           <div className={styles.smallBarGrey}></div>

           <li  className={styles.li}>
          From: Lahore, Pakistan
           </li> 
           <div className={styles.buttonContainer}>
           <a className={styles.button}  href="https://drive.google.com/file/d/1ltyOo6aY6D-5V-CIKC9zXVOHZ5jTmc_7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
           </a>
           </div>
          </div>
        </div>

        <div className={styles.stats}>
            <li className={styles.statli}>
              <p className={styles.largeText}> 1+</p>
              <p>Years Experiance</p>
            </li>
            <div className={styles.greyBarVertical}></div>   

            <li className={styles.statli}>
              <p className={styles.largeText}>5+</p>
              <p>Happy Clients</p>
            </li>
            <div className={styles.greyBarVertical}></div> 

            <li className={styles.statli}>
              <p className={styles.largeText}>20+</p>
              <p>Projects Done</p>
            </li>
            
    
        </div>
    </Container> 
  )
}

export default Aboutme