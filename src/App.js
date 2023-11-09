import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './asset/728 x 90 slide 0.jpg';
import SlideB from "./slidB"

function App() {
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

export default App;
