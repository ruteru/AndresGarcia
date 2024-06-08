import React from "react";
import './presentation.css'
import Profile from '../../../assets/img/profile.png';
import Github from '../../../assets/svg/GithubMark';
import Whatsapp from '../../../assets/svg/WhatsApp';
import Linkedin from '../../../assets/svg/LinkedIn';
import Gmail from '../../../assets/svg/Gmail';
import Resume from '../../../data/resume.json'

export default function Presentation() {
    const { name, phone, email, sumary, title, github, linkedin } = Resume;

    return (
        <div className="presentation">
            <div className="profileSectionContainer">
                <img src={Profile} className="profilePhoto" alt=""></img>
                <h3>{name}</h3>
                <span>{phone}</span>
                <span>{email}</span>
                <div className="description">
                    <span>{sumary}</span>
                </div>
                <div className="social">
                    <a href={github} alt='GitHub'><Github /></a>
                    <a href={linkedin} alt='LinkedIn'><Linkedin /></a>
                    <a href={`https://wa.me/${phone}`} alt='WhatsApp'><Whatsapp /></a>
                    <a href={`mailto:${email}`} alt='Gmail'><Gmail /></a>
                </div>
            </div>
            <div className="technologiesSection">
                <span>Hi, my name is {name}, I'm a {title}</span>
                <h3>People reach out to me when they need exceptional quality design done blazingly fast</h3>
            </div>
        </div>
    );
}