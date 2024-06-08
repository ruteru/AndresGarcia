import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import { IconContext } from "react-icons";

export default function Pricing() {
    return (
        <div>
            <IconContext.Provider value={{ color: '#1e1e20', size: '1.8em', className: 'icon-context' }}>
                <Header />
                <Body>
                    <h1>Pricing Page</h1>
                </Body>
                <Footer />
            </IconContext.Provider>
        </div>
    );
}