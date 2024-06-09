import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import SectionsServices from "../components/Body/serviceSection/SectionsServices";

export default function Services() {
    return(
        <div>
                <Header />
                <Body>
                    <SectionsServices/>
                </Body>
        </div>
    );
}