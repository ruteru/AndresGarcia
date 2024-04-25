import React from "react";
import './home.css'
import Logo from '../../assets/img/outsidersLOGO.png'

function Home() {
    return (
            <div className="homeContainer">
                <div className="navbar">
                    <div className="logo">
                        <img className="logo" alt="logo" src={Logo}></img>
                    </div>
                </div>
                
            </div>
    );
}

export default Home