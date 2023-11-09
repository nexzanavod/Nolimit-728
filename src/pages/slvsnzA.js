import React, { useState, useEffect } from 'react';
import './commen.css'; // Import your CSS file with the animation
import SlvsnzB from "./slvsnzB"
import FlipClock from 'x-react-flipclock';



function SlvsafgA() {

    const [redirectToSlvsausB, setRedirectToSlvsausB] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setRedirectToSlvsausB(true);
      }, 5000);
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    }, []);
  
    // Redirect to SlvsausB component after 1 minute
    if (redirectToSlvsausB) {
      return <SlvsnzB />;
    }
  


  return (
    <div className='slvsNz'>
<div className='clock'>
        <FlipClock
          type="countdown"  
          count_to="2023-11-09 14:00:00"
          units={[
            {
              sep: '',
              type: 'days',
              title: 'දින',
            },
            {
              sep: ':',
              type: 'hours',
              title: 'පැය',
            },
            {
              sep: ':',
              type: 'minutes',
              title: 'මිනිත්තු',
            },
            {
              sep: ':',
              type: 'seconds',
              title: 'තත්පර',
            },
          ]}
        />
      </div>
    </div>
   
  );
}

export default SlvsafgA;
