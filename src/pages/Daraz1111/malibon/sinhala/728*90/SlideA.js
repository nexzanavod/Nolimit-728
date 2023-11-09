import React, { useState, useEffect } from 'react';
import '../../commenMaliban.css';
import Logo from '../../../../../images/Maliban/728 x 90 slide 1 Sin.jpg';
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
        <div className='malibon72820SIN'>
                <img className='lastImg72820SinSIN' src={Logo} />
        </div>

    );
}

export default SlideA;