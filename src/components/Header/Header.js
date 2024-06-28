import React, { useState, useContext } from "react";
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
import { IconContext } from "react-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentPage, changePage } = useContext(ContentContext);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleBookCall = (e) => {
        e.preventDefault();
        window.location.href = 'https://calendly.com/andresgarcia_dev/30min';
    };

    const handleNavigation = (page, path) => {
        changePage(page);
        navigate(path);
    };

    const pageIcons = {
        Home: <AiOutlineHome/>,
        Work: <AiOutlineCode />,
        Services: <AiOutlineApi />,
        Pricing: <AiOutlineMonitor />,
    };

    return (
        <IconContext.Provider value={{ color: '#1e1e20', size: '25px',  className:"icon-context"}}> 
            <div className="container-header">
                <div className="currentPage">
                    {pageIcons[currentPage] || <AiOutlineHome/>}
                    <span>{currentPage}</span>
                </div>
                <div className="navbar">
                    {['Home', 'Work', 'Services', 'Pricing'].map((page) => (
                        <button
                            key={page}
                            onClick={() => handleNavigation(page, `/${page.toLowerCase()}`)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {pageIcons[page]}{page}
                        </button>
                    ))}
                    <button onClick={handleBookCall}><AiOutlineCalendar />Booking</button>
                </div>
                <div className="menu-button" onClick={toggleMenu}>
                    <AiOutlineMenu />
                </div>
                {menuOpen && (
                    <div className="dropdown-menu">
                        {['Home', 'Work', 'Services', 'Pricing'].map((page) => (
                            <button
                                key={page}
                                onClick={() => handleNavigation(page, `/${page.toLowerCase()}`)}
                                className={currentPage === page ? 'active' : ''}
                            >
                                {pageIcons[page]}{page}
                            </button>
                        ))}
                        <button onClick={handleBookCall}><AiOutlineCalendar />Book a Call</button>
                    </div>
                )}
            </div >
        </IconContext.Provider>
    );
}