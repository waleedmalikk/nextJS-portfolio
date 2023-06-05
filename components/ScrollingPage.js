import React, { useRef } from "react";
import styles from "../styles/scrollingPage.module.css"
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Services from "./Services";
import Summary from "./Summary";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";

const ScrollingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const summaryRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeRef, setActiveRef] = useState( useRef(null));


  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveRef(ref);
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar  
            activeRef={activeRef}
            homeRef={homeRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            summaryRef={summaryRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            onHomeClick={() => scrollToRef(homeRef)}
            onAboutClick={() => scrollToRef(aboutRef)}
            onServicesClick={() => scrollToRef(servicesRef)}
            onSummaryClick={() => scrollToRef(summaryRef)}
            onProjectsClick={() => scrollToRef(projectsRef)}
            onContactClick={() => scrollToRef(contactRef)}
          />
        </div>
      <div className={styles.content}>
        <div ref={homeRef}>
          <Homepage />
        </div>
        <div ref={aboutRef}>
          <Aboutme />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={summaryRef}>
          <Summary />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ScrollingPage;
