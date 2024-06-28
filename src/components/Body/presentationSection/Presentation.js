import React from "react";
import './presentation.css'
import Profile from '../../../assets/img/profile.webp';
import Resume from '../../../data/resume.json'
import {
    FaPython,
    FaGoogle,
    FaAws,
    FaNodeJs,
    FaReact,
    FaDocker,
    FaWhatsappSquare, 
    FaLinkedin, 
    FaGithubSquare,
} from 'react-icons/fa';
import { 
    SiTerraform, 
    SiKubernetes,
    SiGmail,
  } from "react-icons/si";

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
                            <a href={github} alt='GitHub'><FaGithubSquare size={50} color="#181717"  /></a>
                            <a href={linkedin} alt='LinkedIn'><FaLinkedin size={50} color="#0077B5" /></a>
                            <a href={`https://wa.me/${phone}`} alt='WhatsApp'><FaWhatsappSquare size={50} color="#25D366" /></a>
                            <a href={`mailto:${email}`} alt='Gmail'><SiGmail size={50} color="#EA4335" /></a>
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
                    <FaPython size={50} color="#3776AB" />
                    <FaNodeJs size={50} color="#339933" />
                    <FaReact size={50} color="#61DAFB" />
                    <FaDocker size={50} color="#2496ED" />
                    <SiKubernetes size={50} color="#326CE5" />
                    <SiTerraform size={50} color="#623CE4" />
                    <FaGoogle size={50} color="#EA4335" />
                    <FaAws size={50} color="#FF9900" />
                </div>
            </div>
        </div>
    );
}