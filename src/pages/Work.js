import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import ResumeComponent from "../components/Body/workSection/ResumeComponent";

export default function Work() {
    return (
        <div>
                <Header />
                <Body>
                    <ResumeComponent/>
                </Body>
        </div>
    );
}