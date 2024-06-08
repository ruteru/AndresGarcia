import React, { useState, useEffect, useContext } from "react";
import { ContentContext } from "../../Context/ContentContext";
import { useNavigate } from 'react-router-dom';
import './header.css';
import {
    AiOutlineCode,
    AiOutlineApi,
    AiOutlineMonitor,
    AiOutlineCalendar,
    AiOutlineMenu,
    AiOutlineHome
} from 'react-icons/ai';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentPage, changePage } = useContext(ContentContext);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const link = document.createElement('link');
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
            console.log('Calendly script loaded');
        };
        document.head.appendChild(script);
    }, []);

    const handleBookCall = (e) => {
        e.preventDefault();
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/andresgarcia_dev/30min' });
        } else {
            console.error('Calendly is not loaded yet');
        }
        return false;
    };

    const handleNavigation = (page, path) => {
        changePage(page);
        navigate(path);
    };

    const pageIcons = {
        Home: <AiOutlineHome />,
        Work: <AiOutlineCode />,
        Services: <AiOutlineApi />,
        Pricing: <AiOutlineMonitor />,
    };

    return (
        <div className="container-header">
            <div className="currentPage">
                {pageIcons[currentPage] || <AiOutlineHome />}
                <span>{currentPage}</span>
            </div>
            <div className="navbar">
                <button onClick={() => handleNavigation('Home', '/home')}><AiOutlineHome />Home</button>
                <button onClick={() => handleNavigation('Work', '/work')}><AiOutlineCode />Work</button>
                <button onClick={() => handleNavigation('Services', '/services')}><AiOutlineApi />Services</button>
                <button onClick={() => handleNavigation('Pricing', '/pricing')}><AiOutlineMonitor />Pricing</button>
                <button onClick={handleBookCall}><AiOutlineCalendar />Book a Call</button>
            </div>
            <div className="menu-button" onClick={toggleMenu}>
                <AiOutlineMenu />
            </div>
            {menuOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => handleNavigation('Home', '/home')}><AiOutlineHome />Home</button>
                    <button onClick={() => handleNavigation('Work', '/work')}><AiOutlineCode />Work</button>
                    <button onClick={() => handleNavigation('Services', '/services')}><AiOutlineApi />Services</button>
                    <button onClick={() => handleNavigation('Pricing', '/pricing')}><AiOutlineMonitor />Pricing</button>
                    <button onClick={handleBookCall}><AiOutlineCalendar />Book a Call</button>
                </div>
            )}
        </div >
    );
}