import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Presentation from '../components/Body/presentationSection/Presentation'
import '../styles/home.css';

export default function Home() {
    return (
        <div className="container-home">
            <Header />
            <Body>
                <Presentation />
            </Body>
        </div>
    );
}