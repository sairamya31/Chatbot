import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './homepage.module.css'


const Homepage = () => {
  const [flashMessage, setFlashMessage] = useState('');
  const [showFlashMessage, setShowFlashMessage] = useState(true);

  useEffect(() => {
    const flashMessages = [
      "Propel your research forward. Funding bioscience, one idea at a time.",
      "Innovate bioscience. Submit. Fund. Flourish. 🌱",
      "Fueling bioscience dreams. Your proposal, our priority.",
      "Elevate bioscience ideas with our funding portal. Submit now!",
    ];

    const randomIndex = Math.floor(Math.random() * flashMessages.length);
    const message = flashMessages[randomIndex];

    let index = 0;
    const intervalId = setInterval(() => {
      setFlashMessage(message.substring(0, index));
      index++;

      if (index > message.length) {
        clearInterval(intervalId);
        setShowFlashMessage(false);
        setTimeout(() => setShowFlashMessage(true), 2000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className={styles.leftHalf} style={{ flex: '0 0 65%', background: '#ffffdb', alignItems: 'center', justifyContent: 'flex-start', color: '#333', fontSize: '1.5rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {showFlashMessage && <p className={styles.flashMessage}>{flashMessage}</p>}
      </div>

      <div className={styles.rightHalf} style={{ flex: '0 0 35%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2><p>Get Started</p></h2>
          <button className={styles.loginButton} onClick={event =>  window.location.href='/login'}>Login</button>
          <button className={styles.loginButton}style={{marginLeft:"10px"}} onClick={event =>  window.location.href='/login'}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

