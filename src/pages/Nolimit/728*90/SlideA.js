import React, { useState, useEffect } from 'react';
import './commenNolimit.css';
import Logo from '../../../images/Nolimt/728 x 90 slide 0.jpg';
import { useNavigate } from 'react-router-dom';
import SlideB from "./SlideB"

function SlideA() {

    const navigate = useNavigate();

   

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
        <div className='NolimitfirstImg2'>
       
                <img className='lastImg2' src={Logo} />

        </div>

    );
}

export default SlideA;