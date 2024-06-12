import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dataStyles.css';

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

  useEffect(() => {
    scrapeData();
  }, []);

  return (
    <div className="dataContainer">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data.length > 0 && (
        <div className="tables">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ExternalData;
