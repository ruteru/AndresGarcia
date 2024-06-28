import React, { useState } from "react";
import Backend from '../../../assets/img/service/python.webp';
import Frontend from '../../../assets/img/service/frontend.webp';
import Fullstack from '../../../assets/img/service/backend.webp';
import SysAdmin from '../../../assets/img/service/datacenter.webp';
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
                image={SysAdmin}
                title="SysAdmin"
                description="Big Data, Infrastructure as Code, GitOps, System Optimization, Security Compliance"
                isExpanded={expandedSection === 'SysAdmin'}
                onLearnMoreClick={() => handleSectionClick('SysAdmin')}
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
                        <p>
                            I bring extensive experience and expertise,
                            my skill set includes a robust
                            ability to accurately translate Figma designs
                            and templates into pixel-perfect, high-performance
                            web pages, applications, cloning
                            websites and ensuring their functionality mirrors
                            the original to the finest detail.
                        </p>
                        <h2>Technical Proficiencies:</h2>
                        <ul>
                            <li>
                                <strong>HTML & CSS</strong>
                            </li>
                            <li>
                                <strong>JavaScript</strong>
                            </li>
                            <li>
                                <strong>React & React Native</strong>
                            </li>
                            <li>
                                <strong>Responsive Design</strong>
                            </li>
                            <li>
                                <strong>SEO Optimization</strong>
                            </li>
                            <li>
                                <strong>CSS Animations</strong>
                            </li>
                            <li>
                                <strong>Server-Side Rendering (SSR)</strong>
                            </li>
                        </ul>
                        <p>
                            I am capable of transforming complex design concepts
                            into user-friendly, functional applications.
                            My approach emphasizes performance, accessibility, and maintainability,
                            ensuring that the solutions I develop not only meet but
                            exceed user expectations.
                        </p>
                    </div>
                );
            case "Fullstack":
                return (
                    <div className="hiddenContent">
                        <h1>Fullstack Services</h1>
                        <p>
                            As a Fullstack Developer, I seamlessly integrate frontend and backend
                            technologies to deliver comprehensive solutions. My expertise spans
                            across various technologies and frameworks, enabling me to build end-to-end
                            applications that are both robust and scalable.
                        </p>
                        <h2>Technical Proficiencies:</h2>
                        <ul>
                            <li>
                                <strong>Frontend Development</strong>
                            </li>
                            <li>
                                <strong>Backend Development</strong>
                            </li>
                            <li>
                                <strong>Database Management</strong>
                            </li>
                            <li>
                                <strong>API Development</strong>
                            </li>
                            <li>
                                <strong>DevOps</strong>
                            </li>
                            <li>
                                <strong>Fullstack Integration</strong>
                            </li>
                        </ul>
                    </div>
                );
            case "SysAdmin":
                return (
                    <div className="hiddenContent">
                        <h1>SysAdmin and SysOps Services</h1>
                        <p>I am a skilled SysAdmin with over 2 years of experience in Infrastructure as Code (IaC)
                            and Cloud DevOps, and over 4 years of experience in fullstack development. I specialize
                            in Python and Node, and have extensive expertise in managing Docker, Kubernetes, AWS,
                            Google Cloud, and Terraform environments. I am proficient in automating and optimizing
                            infrastructure, ensuring high availability, performance, and security.
                        </p>
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
