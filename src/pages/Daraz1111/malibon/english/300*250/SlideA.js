import React, { useState, useEffect } from 'react';
import '../../commenMaliban.css';
import Logo from '../../../../../images/Maliban/300 x 250 Eng slide 1.jpg';
import SlideB from "./SlideB"

function SlideA() {

   

    const [Slide_B, setSlide_B] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setSlide_B(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }, []);
  
    // Redirect to SlvsausB component after 1 minute
    if (Slide_B) {
      return <SlideB />;
    }
  

    return (
        <div className='MalibanfirstImgEng'>
       
                <img className='lastImg' src={Logo} />

        </div>

    );
}

export default SlideA;