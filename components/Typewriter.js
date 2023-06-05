import { useState, useEffect } from 'react';
import styles from "../styles/typewriter.module.css"

const Typewriter = ({ text, timeOut }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const text = textArr;
  const cursor = '|'; 

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, prevText.length - 1));
      } else {
        if(text[currentIndex][displayText.length]){
          setDisplayText(
            (prevText) => prevText + text[currentIndex][prevText.length]
          );
        }
      }

      if (
        (isDeleting && displayText === '') ||
        (!isDeleting && displayText === text[currentIndex])
      ) {
        setIsDeleting((prevState) => !prevState);
        setCurrentIndex((prevIndex) =>
          isDeleting ? prevIndex : (prevIndex + 1) % text.length
        );
      }
    }, timeOut);

    return () => {
      clearInterval(interval);
    };
  }, [displayText, currentIndex, isDeleting, text]);

  return (
    <div>
      {displayText}
      <span className={styles.cursor}>{cursor}</span>
    </div>
  );
};

export default Typewriter;
