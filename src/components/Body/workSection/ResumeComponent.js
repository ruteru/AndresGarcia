import React from "react";
import resume from '../../../data/resume.json';
import './resumeStyles.css'

export default function ResumeComponent() {
    return (
        <div className="work-container">
            {resume.work.map((job, index) => (
                <div key={index} className="work-item">
                    <h3>{job.title} at <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a></h3>
                    <p style={{textAlign: 'center'}}>{job.date}</p>
                    <p>{job.details}</p>
                </div>
            ))}
        </div>
    );
}
