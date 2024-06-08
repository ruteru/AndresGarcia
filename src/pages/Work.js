import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import ResumeComponent from "../components/Body/workSection/ResumeComponent";
import { IconContext } from "react-icons";

export default function Work() {
    return (
        <div>
            <IconContext.Provider value={{ color: '#1e1e20', size: '1.8em', className: 'icon-context' }}>
                <Header />
                <Body>
                    <ResumeComponent/>
                </Body>
                <Footer />
            </IconContext.Provider>
        </div>
    );
}