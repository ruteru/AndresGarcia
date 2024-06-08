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
    return (
        <div className={`sectionColumn ${isExpanded ? 'expanded' : ''}`}>
            <div className="originalContent">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="discoverButtons">
                    <button onClick={onLearnMoreClick}>Learn More</button>
                    <button>Hire Me</button>
                </div>
            </div>
            {isExpanded && (
                <div className="hiddenContent">
                    <h1>hello</h1>
                    <p>lorem ipsum</p>
                </div>
            )}
        </div>
    );
}
