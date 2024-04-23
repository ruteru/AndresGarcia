import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Trading from './pages/trading'; 
import NotFound from './pages/NotFound';
import resumeData from './data/resume.json';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const title = resumeData.name;
const root = ReactDOM.createRoot(document.getElementById('root'));

document.getElementById('dynamicTitle').innerText = title;
document.getElementById('descriptionMeta').setAttribute('content', `${title} portfolio`);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);
