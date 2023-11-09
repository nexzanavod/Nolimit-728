import React, { useState, useEffect } from 'react';
import './commenNolimit.css';
import Logo from '../../../images/Nolimt/300 x 250 slide 0.jpg';
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
        <div className='NolimitfirstImg'>
       
                <img className='lastImg' src={Logo} />

        </div>

    );
}

export default SlideA;