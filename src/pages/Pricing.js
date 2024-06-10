import React from "react";
import Header from "../components/Header/Header";
import Tasks from "../components/Body/pricing/Tasks";
import { ConstructionProvider } from '../Context/ConstructionContext';

export default function Pricing() {
    return (
        <div>
            <Header />
            <ConstructionProvider>
                <Tasks />
            </ConstructionProvider>
        </div>
    );
}