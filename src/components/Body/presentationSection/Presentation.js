import React from "react";
import './presentation.css'
import Profile from '../../../assets/img/profile.png';
import Github from '../../../assets/svg/GithubMark';
import Whatsapp from '../../../assets/svg/WhatsApp';
import Linkedin from '../../../assets/svg/LinkedIn';
import Gmail from '../../../assets/svg/Gmail';
import Resume from '../../../data/resume.json'
import {
    FaPython,
    FaJs,
    FaGoogle,
    FaAws,
    FaNodeJs,
    FaReact,
    faGo
} from 'react-icons/fa';
import { BiLogoGoLang } from "react-icons/bi";
import { SiTerraform } from "react-icons/si";

export default function Presentation() {
    const { name, phone, email, location, sumary, github, linkedin } = Resume;

    return (
        <div className="presentation">
            <div className="profileSectionContainer">
                <div className="presentationCard">
                    <img src={Profile} className="profilePhoto" alt=""></img>
                    <div className="presentationInfo">
                        <h2 className="titleF">{name}</h2>
                        <span>{phone}</span>
                        <span>{location}</span>
                        <span>{email}</span>
                        <div className="social">
                            <a href={github} alt='GitHub'><Github /></a>
                            <a href={linkedin} alt='LinkedIn'><Linkedin /></a>
                            <a href={`https://wa.me/${phone}`} alt='WhatsApp'><Whatsapp /></a>
                            <a href={`mailto:${email}`} alt='Gmail'><Gmail /></a>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <span>{sumary}</span>
                </div>

            </div>
            <div className="foo">
                <h3>Experience with</h3>
                <div className="techStack">
                    <FaPython size={50} />
                    <FaJs size={50} />
                    <FaReact size={50} />
                    <BiLogoGoLang size={50} />
                    <FaNodeJs size={50} />
                    <SiTerraform size={50} />
                    <FaGoogle size={50} />
                    <FaAws size={50} />
                </div>
            </div>
        </div>
    );
}