import React, { useState } from 'react';
import axios from 'axios';

function ExternalData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const scrapeData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      
      if (response.status !== 200) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = response.data;
      const parsedData = result.map(post => ({
        title: post.title,
        body: post.body,
      }));

      setData(parsedData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={scrapeData}>Fetch Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExternalData;
