import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';
import resumeData from './data/resume.json';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ContentProvider } from './Context/ContentContext'
const title = resumeData.name;
const root = ReactDOM.createRoot(document.getElementById('root'));

document.getElementById('dynamicTitle').innerText = title;
document.getElementById('descriptionMeta').setAttribute('content', `${title} portfolio`);

root.render(
  <React.StrictMode>
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ContentProvider>
  </React.StrictMode>
);

reportWebVitals(console.log);
