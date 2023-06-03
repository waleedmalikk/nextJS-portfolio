import React from 'react'
import styles from "../styles/summary.module.css"
import Container from './Container'
import Title from './Title'


const Summary = () => {
return (
    <Container>
        <Title title="Resume"/>
        <div className={styles.cardsContainer}>
            <div className={styles.cardsColumn}>
                <div className={styles.h2}>
                    <h4>My Education</h4> 
                </div>
                <div className={styles.card}>
                    <div className={styles.yearsContainer}>
                        <h6 className={styles.years} >2016 - 2020</h6>
                    </div>
                    <h5 className={styles.subject}>BS Computer Science</h5>
                    <h6 className={styles.uni}>Lahore University of Management Sciences (LUMS)</h6>
                    <p className={styles.info}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>
            <div className={styles.cardsColumn}>
            <div className={styles.h2}>
                    <h4>My Experience</h4> 
                </div>
                <div className={styles.card}>
                    <div className={styles.yearsContainer}>
                        <h6 className={styles.years} >2022 - 2023</h6>
                    </div>
                    <h5 className={styles.subject}>Full-Stack Developer</h5>
                    <h6 className={styles.uni}>GreyLoops</h6>
                    <p className={styles.info}>Developed a variety of full-stack web applications using multiple technologies including Angular, React, Bootstrap, MySQL, PostgreSQL, NodeJS, JavaScript, HTML and CSS</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.yearsContainer}>
                        <h6 className={styles.years} >2021 - 2022</h6>
                    </div>
                    <h5 className={styles.subject}>Full-Stack Developer</h5>
                    <h6 className={styles.uni}>FreeLance</h6>
                    <p className={styles.info}>Developed web applications using Angular, React, plain JavaScript, CSS and HTML, ensuring optimal user experience and responsiveness.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.yearsContainer}>
                        <h6 className={styles.years} >2020-2021</h6>
                    </div>
                    <h5 className={styles.subject}>Afiniti</h5>
                    <h6 className={styles.uni}>Data Analyst</h6>
                    <p className={styles.info}>Built predictive models that helped optimize the contact center interactions, resulting in increased customer satisfaction and revenue for clients i.e. Ceasars, T-Mobile.</p>
                </div>
            </div>
        </div>

        <div className={styles.h2}>
            <h4>My Skills</h4> 
        </div>
        <div className={styles.skillsContainer}>
            <div className={styles.skillsColumn}>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.skillsColumn}>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.skillHead}>
                        <div>
                            Web Design
                        </div>
                        <div>
                            80%
                        </div>
                    </div>
                    <div className={styles.loaders}>
                        <div className={styles.loader1}>
                        </div>
                        <div className={styles.loader2}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>
                Download CV
            </button>
        </div>
    </Container>
)
}

export default Summary