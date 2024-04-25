import React, { useState, useEffect } from 'react';
import resumeData from '../data/resume.json';
import Logo from '../components/logosBool';
import AppsData from '../data/myApps.json';
import LogosTech from '../components/logosTech';
import techData from '../data/techStack.json';
import './App.css';
import Outsiders from './mobile-desktop/outsiders';

function App() {
  const [showContactScreen, setShowContactScreen] = useState(false);
  const [showDownloadScreen, setShowDownloadScreen] = useState(false);
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleContactButtonClick = () => {
    setShowContactScreen(!showContactScreen);
    setShowDownloadScreen(false);
  };

  const handleDownloadButtonClick = () => {
    setShowDownloadScreen(!showDownloadScreen);
    setShowContactScreen(false);
  };

  const sendEmail = () => {
    const subject = 'Subject of your email';
    const gmailComposeURL = `https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRJdPdGnzXPljjPXQXJjnvntwLnrDzjTxSKRPSMbJmTwlbmHcWMnBkhCBQtnSZtQrnsvh&subject=${encodeURIComponent(subject)}`;
    window.open(gmailComposeURL, '_blank');
  };

  const sendWhatsapp = () => {
    const whatsappURL = `https://wa.me/${resumeData.phone}`;
    window.open(whatsappURL, '_blank');
  };

  const openLinkedin = () => {
    const linkedinURL = resumeData.linkedin;
    window.open(linkedinURL, '_blank');
  };

  const openGithub = () => {
    const githubURL = resumeData.github
    window.open(githubURL, '_blank');
  };
  
  const downloadHtml = () => {
    const html = document.querySelector('html').cloneNode(true);
    const scripts = Array.from(html.querySelectorAll('script'));
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.text = script.textContent;
        html.appendChild(newScript);
    });
    const blob = new Blob([html.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPdf = () => {
    const pdfFile = require('../assets/AndresGarcia.pdf');
    const blob = new Blob([pdfFile], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AndresGarcia.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadJson = () => {
    const json = JSON.stringify(resumeData);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <body className="App-body">
      <div className="App">
        <menubar>
          <button onClick={handleDownloadButtonClick}>Download Resume</button>
          <button onClick={handleContactButtonClick}>Contact me</button>
        </menubar>
        
        <div className='tittleProfile'>
          <img className='profile' src='https://media.licdn.com/dms/image/D4D03AQEKwF_QJ94mLw/profile-displayphoto-shrink_400_400/0/1713109803593?e=1718841600&v=beta&t=uzVc_eXxE6bh6omlk5L0Ro5K8VMWy7sajOM_Be8Zo18' alt=''></img>
          <h1 className='title'>Welcome to my profile! <br></br> My name is {resumeData.name}</h1>
        </div>
        
        <div className='devicons'>
          <i class="devicon-python-plain-wordmark"></i>
          <i class="devicon-fastapi-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-react-original-wordmark"></i>
          <p className='sumary'>{resumeData.sumary}</p>
        </div>
        
        <strong className='myApps'>I am a {resumeData.title} and I inspire in these apps</strong>
        <Logo style={{ maxWidth: '1000px' }} logosData={AppsData} numSlides={3}/>

        <div class="calendly-inline-widget" data-url="https://calendly.com/andresgarcia_dev/30min?hide_gdpr_banner=1"><calendarUrl /></div>

        <h2 style={{ padding: '30px', marginTop: '10px' }}>Here are some of my skills</h2>
        <div className='grid-cube'>

          <div className='cube'>
          <h3>Programing Languages</h3>
          <LogosTech logosData={techData} numSlides={3} filter="programingLanguages"/>
          </div>

          <div className='cube'>
            <h3>Favorite Frameworks</h3>
            <LogosTech logosData={techData} numSlides={3} filter="frameworks"/>
          </div>

          <div className='cube'>
            <h3>Databases</h3>
            <LogosTech logosData={techData} numSlides={3} filter="databases"/>
          </div>
          
          <div className='cube'>
            <h3>Machine Learning and AI</h3>
            <LogosTech logosData={techData} numSlides={3} filter="ML/AI"/>
          </div>

          <div className='cube'>
            <h3>Cloud Services</h3>
            <LogosTech logosData={techData} numSlides={3} filter="cloud"/>
          </div>

          <div className='cube'>
            <h3>Tools</h3>
            <LogosTech logosData={techData} numSlides={3} filter="tools"/>
          </div>
        </div>
        

        {showContactScreen && (
          <div className="contact-screen">
            <div className='contact-square'>
              <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
              <p>You can contact me through:</p>
              <ul>
                <div className='icon-button-socials'>
                  <button onClick={sendEmail} className='icon-button-email'></button>  
                  <button onClick={sendWhatsapp} className='icon-button-whatsapp'></button>
                  <button onClick={openLinkedin} className='icon-button-linkedin'></button>
                  <button onClick={openGithub} className='icon-button-github'></button>
                </div>
                
                <li>
                  Email: {resumeData.email} <br />
                  Phone: {resumeData.phone} 
                </li>
              </ul>
              <button className='backButton' onClick={handleContactButtonClick}>Back</button>
            </div>
          </div>
        )}

        {showDownloadScreen && (
          <div className="contact-screen">
            <div className='download-square'>
              <h2 style={{ textAlign: 'center' }}>Download Resume</h2>
              <ul>
                <div className='icon-button-download'>
                  <button onClick={downloadPdf}>Download as PDF</button>
                  <button onClick={downloadJson}>Download as JSON</button>
                  <button onClick={downloadHtml}>Download as HTML</button>
                </div>
              </ul>
              <button className='backButton' onClick={handleDownloadButtonClick}>Back</button>
            </div>
          </div>
        )}
          
        <h3>Work Experience</h3> 
        <div className='workContainer'>
          {resumeData.work.map((work) => (
          <div className='workSection'>
            <br></br>
            <p>
              {work.title} at <a href={work.companyUrl} target="_blank" rel="noopener noreferrer">{work.company}</a>
            </p>

            <p>{work.date}</p>
            <br></br>
            <p>{work.details}</p>
          </div>
          ))}
        </div>

        <h3>Projects</h3>
        <div className='projectContainer'>
          <a src=<Outsiders /> href="outsiders">Outsiders</a>
        </div>

        <footer>
            <p>This repository is open source and inspired by <a href="https://tsuramii.github.io/online-cv/">@tsuramii's online CV</a>.</p>
        </footer>
        
      </div>
    </body>
  );
}

export default App;
