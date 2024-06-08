import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Presentation from '../components/Body/presentationSection/Presentation'
import '../styles/home.css';
import { IconContext } from "react-icons";

export default function Home() {
    return (
        <div className="container-home">
            <IconContext.Provider value={{ color: '#1e1e20', size: '1.8em', className: 'icon-context' }}>
                <Header />
                <Body>
                    <Presentation />
                </Body>
                <Footer />
            </IconContext.Provider>
        </div>
    );
}