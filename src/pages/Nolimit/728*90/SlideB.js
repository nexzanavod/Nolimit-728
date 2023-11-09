import React, { useState, useEffect } from 'react';
import './commenNolimit.css'; // Import your CSS file with the animation
import { useNavigate } from 'react-router-dom';

import FlipClock from 'x-react-flipclock';



function SlideB() {

      const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    const navigateTimer = setTimeout(() => {
      navigate('/728*90/nolimit');
      setTimeout(() => {
        window.location.reload();
      }, 7000); 
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);



     


  return (
    <div className='NolimitSlide728A'>
<div className='clock7202'>
        <FlipClock
          type="countdown"  
          count_to="2023-11-11 24:00:00"
          units={[
            {
              sep: '',
              type: 'days',
              title: 'Days',
            },
            {
              sep: ':',
              type: 'hours',
              title: 'Hours',
            },
            {
              sep: ':',
              type: 'minutes',
              title: 'Minutes',
            },
            {
              sep: ':',
              type: 'seconds',
              title: 'Seconds',
            },
          ]}
        />
      </div>
    </div>
   
  );
}

export default SlideB;
