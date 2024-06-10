import React, { useState, useContext } from 'react';

const ConstructionContext = React.createContext();

export const useConstructionContext = () => useContext(ConstructionContext);

export const ConstructionProvider = ({ children }) => {
  const [isUnderConstruction, setIsUnderConstruction] = useState(true);

  return (
    <ConstructionContext.Provider value={{ isUnderConstruction, setIsUnderConstruction }}>
      {isUnderConstruction ? (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
          <h1>Page in Construction</h1>
          <p>We are working hard to bring you this page. Please check back later.</p>
        </div>
      ) : (
        children
      )}
    </ConstructionContext.Provider>
  );
};
