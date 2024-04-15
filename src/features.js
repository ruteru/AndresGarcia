import React, { useEffect } from 'react';
import './features.css';

function Features() {
  useEffect(() => {
    const ul = document.querySelector('.gradient-blur');
    if (ul) {
      const clonedUl = ul.cloneNode(true);
      ul.insertAdjacentElement('afterend', clonedUl);
      clonedUl.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="container">
      <div className="gradient-blur">
        <div><img src='https://www.logo.wine/a/logo/Columbia_Sportswear/Columbia_Sportswear-Logo.wine.svg' alt='nose' /></div>
        <div><img src='https://logovectorseek.com/wp-content/uploads/2021/01/augusta-sportswear-logo-vector.png' alt='nose' /></div>
        <div><img src='https://i.pinimg.com/originals/53/ae/b3/53aeb34cd2949406a72f233a825faea9.png' alt='nose' /></div>
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlmoq6xGCYEswwVE3ZWFt8BgBKnrSu4FZjQ&usqp=CAU' alt='nose' /></div>
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvmU36zGXmFwcBubqPPLeQXe0-yGv4b5CBw&usqp=CAU' alt='nose' /></div>
      </div>
    </div>
  );
}

export default Features;
