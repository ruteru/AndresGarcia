import React from "react";
import './body.css'

export default function Body({ children }) {
    return (
        <div className="container-body">
            {children}
        </div>
    );
}