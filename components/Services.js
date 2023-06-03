import React from 'react'
import styles from '../styles/services.module.css'
import ContainerGrey from './ContainerGrey'
import Title from './Title'

const Services = () => {
  return (
    <ContainerGrey>
        <Title title={"What I Do?"}/>
        <div className={styles.twoColumns}>
            <div className={styles.oneColumn}>
                <div className={styles.service}>
                <span className={`fas fa-paint-brush ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>Back-End Development</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className={styles.service}>
                <span className={`fas fa-desktop ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>Front-End Development</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <span className={`fas fa-chart-line ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>Web Design</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
            <div className={styles.oneColumn}>
                <div className={styles.service}>
                    <span className={`fas fa-code ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>API Integration</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <span className={`fas fa-code ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>App Development</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <span className={`fas fa-desktop ${styles.icon}`}></span>
                    <div className={styles.text}>
                        <h4 className={styles.h4}>JavaScript Development</h4>
                        <p className={styles.para}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
        </div>
    </ContainerGrey>

  )
}

export default Services