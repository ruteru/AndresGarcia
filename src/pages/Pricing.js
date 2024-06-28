import React from "react";
import Header from "../components/Header/Header";
import Tasks from "../components/Body/pricing/lib/Tasks";
import Prices from "../components/Body/pricing/Prices";

export default function Pricing() {
    return (
        <div>
            <Header />
            <Prices />
            {/* <Tasks /> */}
        </div>
    );
}