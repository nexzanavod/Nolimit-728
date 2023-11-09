import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './commen.css';
import Logo from '../images/slvsnzB.jpg';

function SlvsafgB() {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay the fade-in effect for a certain duration (e.g., 1000ms or 1 second)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // After 4 seconds, navigate to the 'slvseng' route
    const navigateTimer = setTimeout(() => {
      navigate('/slvsnz'); // Replace with the route path of SlvsausA
      setTimeout(() => {
        window.location.reload(); // Reload the page
      }, 7000); // You might need a slight delay before reloading
    });

    // Clear both timers if the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className='firstImg'>
      <div className={`slvsAusB ${fadeIn ? 'fade-in' : ''}`}>
        <img className='lastImg' src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default SlvsafgB;
