import React from "react";
import Header from "../components/Header/Header";
import ResumeComponent from "../components/Body/workSection/ResumeComponent";
import ExternalData from "../components/Web/ExternalData";
export default function Work() {
    return (
        <div>
            <Header />
            <ResumeComponent />

            <h1>Client-side Web Scraper</h1>
            <ExternalData />
        </div>
    );
}