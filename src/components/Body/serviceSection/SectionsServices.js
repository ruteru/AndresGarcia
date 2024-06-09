import React, { useState } from "react";
import Backend from '../../../assets/img/service/Backend.png';
import Frontend from '../../../assets/img/service/Frontend.png';
import Fullstack from '../../../assets/img/service/Fullstack.png';
import Ai from '../../../assets/img/service/IA.png';
import './servicesStyles.css';
import './animationsStyles.css'

export default function SectionsServices() {
    const [expandedSection, setExpandedSection] = useState(null);

    const handleSectionClick = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="servicesContainer">
            <ServiceColumn
                image={Backend}
                title="Backend"
                description="Python, Databases and DevOps development for your team"
                isExpanded={expandedSection === 'Backend'}
                onLearnMoreClick={() => handleSectionClick('Backend')}
            />
            <ServiceColumn
                image={Frontend}
                title="Frontend"
                description="Website and Mobile experiences for your users"
                isExpanded={expandedSection === 'Frontend'}
                onLearnMoreClick={() => handleSectionClick('Frontend')}
            />
            <ServiceColumn
                image={Fullstack}
                title="Fullstack"
                description="Combine the technologies you need"
                isExpanded={expandedSection === 'Fullstack'}
                onLearnMoreClick={() => handleSectionClick('Fullstack')}
            />
            <ServiceColumn
                image={Ai}
                title="Machine Learning"
                description="Ai, ML-Ops and features for your project"
                isExpanded={expandedSection === 'Machine Learning'}
                onLearnMoreClick={() => handleSectionClick('Machine Learning')}
            />
        </div>
    );
}

function ServiceColumn({ image, title, description, isExpanded, onLearnMoreClick }) {
    const renderHiddenContent = () => {
        switch (title) {
            case "Backend":
                return (
                    <div className="hiddenContent">
                        <h1 className="titleF">Backend Services</h1>
                        <p>
                            As a specialist in Python, I bring a nice experience in building robust,
                            scalable, and efficient backend architectures. In addition to Python, 
                            I have extensive experience with Node.js and Golang.
                        </p>

                        <p>I know a variety of development methodologies:</p>
                        <p><strong>Behavior Driven Development (BDD)</strong></p>
                        <p><strong>Object-Oriented Programming (OOP)</strong></p>
                        <p><strong>Domain-Driven Design (DDD)</strong></p>
                        <p><strong>Hexagonal Architecture</strong></p>

                        <p>
                            Most of my experience is building custom business logic for various applications.
                            My understanding in business requirements and converting them into efficient and
                            effective user experiences. Whether you need complex workflows, data processing pipelines,
                            or integration with third-party services, I can implement a solution that meets your needs.
                        </p>

                        <p>I have a deep understanding of various communication protocols, including:</p>
                        <p><strong>REST</strong></p>
                        <p><strong>WebSocket</strong></p>
                        <p><strong>FTP</strong></p>
                        <p><strong>SFTP</strong></p>
                        <p><strong>DNS</strong></p>
                    </div>
                );
            case "Frontend":
                return (
                    <div className="hiddenContent">
                        <h1>Frontend Services</h1>
                        <p>Detail about Frontend services...</p>
                    </div>
                );
            case "Fullstack":
                return (
                    <div className="hiddenContent">
                        <h1>Fullstack Services</h1>
                        <p>Detail about Fullstack services...</p>
                    </div>
                );
            case "Machine Learning":
                return (
                    <div className="hiddenContent">
                        <h1>Machine Learning Services</h1>
                        <p>Detail about Machine Learning services...</p>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <div className={`sectionColumn ${isExpanded ? 'expanded' : ''}`}>
            <div className="originalContent">
                <img src={image} alt={title} />
                <h2 className="titleF">{title}</h2>
                <p className="sentenceF">{description}</p>
                <div className="discoverButtons">
                    <button className="descriptionF" onClick={onLearnMoreClick}>Learn More</button>
                    <button className="descriptionF">Hire Me</button>
                </div>
            </div>
            {isExpanded && renderHiddenContent()}
        </div>
    );
}
