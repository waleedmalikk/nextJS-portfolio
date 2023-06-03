import React from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.h1}>
            <h1>Get in Contact</h1>
        </div>
        <div className={styles.lineContainer}>
            <div className={styles.smallBar}></div>
        </div>
        <div className={styles.twoColumns}>
            <div className={styles.address}>
                <h4 className={styles.addressTitle}>
                    Address
                </h4>
                <p class={styles.addressPara}>
                    4th Floor, Plot No.22,
                    <br />
                    145 Murphy Canyon Rd.
                    <br />
                    San Diego CA 2028
                </p>
                <div className={styles.info}>
                    <div className={styles.phone}>
                        <div className={styles.icon}>
                            <span className="fas fa-phone"></span>
                        </div>
                        <div className={styles.number}>
                            (060) 444 434 444
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <div className={styles.icon}>
                            <span className="fas fa-mobile"></span>
                        </div>
                        <div className={styles.number}>
                            (060) 444 434 444
                        </div>
                    </div>
                    <div className={styles.email}>
                        <div className={styles.icon}>
                            <span className="fas fa-envelope"></span>
                        </div>
                        <div className={styles.email}>
                            chat@simone.com
                        </div>
                    </div>
                </div>
                <h4 className={styles.followTitle}>
                    Follow Me
                </h4>
                <div className={styles.horizontalList}>
                    <div className={styles.fbIcon}>
                    <span className="fab fa-facebook"></span>
                    </div>
                    <div className={styles.liIcon}>
                    <span className="fab fa-linkedin"></span>
                    </div>
                    <div className={styles.gitIcon}>
                    <span className="fab fa-github"></span>
                    </div>
                </div>
            </div>
            <div className={styles.note}>
                <h4 className={styles.noteTitle}>
                SEND US A NOTE
                </h4>
                <div>
                    <form>
                        <div className={styles.nameEmail}>                 
                            <input className={styles.nameField} type="text" id="name" name="name" placeholder='Name' />
                            <input className={styles.emailField} type="email" id="email" name="email" placeholder='Email' />
                        </div>
                        <textarea  className={styles.messageField} id="message" name="message" placeholder='Message'></textarea>
                        <div className={styles.buttonContainer}>
                        <button className={styles.button} type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Contact