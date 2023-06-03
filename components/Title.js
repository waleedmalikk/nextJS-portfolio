import React from 'react'
import styles from "../styles/title.module.css"

const Title = (props) => {
  return (
    <div>
        <div className={styles.h2}>
            <h2>{props.title}</h2>
        </div>
        <div className={styles.lineContainer}>
            <div className={styles.smallBar}></div>
        </div>
    </div>
  )
}

export default Title