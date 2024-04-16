import React from 'react';
import './logos.css';

class Logos extends React.Component {
  render() {
    const { logosData, numSlides, filter } = this.props;

    const logosSlides = [];
    Object.keys(logosData.icons).forEach(category => {
      if (filter && filter !== category) {
        return;
      }

      const filteredLogosData = Object.entries(logosData.icons[category])
        .filter(([key, value]) => value[0] === true)
        .map(([key, value]) => ({ alt: key, src: value[1] }));

      for (let i = 0; i < numSlides; i++) {
        logosSlides.push(
          <div className="logos-slide" key={`${category}_${i}`}>
            {filteredLogosData.map((logo, index) => (
              <div className="logo-container" key={`${category}_${index}`}>
                <div dangerouslySetInnerHTML={{ __html: logo.src }} />
                <div className="alt-text">{logo.alt}</div>
              </div>
            ))}
          </div>
        );
      }
    });

    return <div className="logos">{logosSlides}</div>;
  }
}

export default Logos;
