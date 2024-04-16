import React from 'react';
import './logos.css';

class Logos extends React.Component {
  render() {
    const { logosData, numSlides } = this.props;

    const filteredLogosData = Object.entries(logosData.favoriteApps)
      .filter(([key, value]) => value[0] === true)
      .map(([key, value]) => ({ alt: key, src: value[1].img }));

    const logosSlides = [];
    for (let i = 0; i < numSlides; i++) {
      logosSlides.push(
        <div className="logos-slide" key={i}>
          {filteredLogosData.map((logo, index) => (
            <div className="logo-container" key={index}>
              <img alt={logo.alt} src={logo.src} />
              <div className="alt-text">{logo.alt}</div>
            </div>
          ))}
        </div>
      );
    }

    return <div className="logos">{logosSlides}</div>;
  }
}

export default Logos;
