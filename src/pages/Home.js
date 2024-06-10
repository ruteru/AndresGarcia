import React from "react";
import Header from "../components/Header/Header";
import Presentation from '../components/Body/presentationSection/Presentation'

export default function Home() {
    return (
        <div className="container-home">
            <Header/>
            <Presentation/>
        </div>
    );
}