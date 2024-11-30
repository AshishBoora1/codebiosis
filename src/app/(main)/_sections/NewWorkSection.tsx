import React from 'react';
import { ourWorkData } from './ourWork';
import './newWorkSection.css';

const NewWorkSection = () => {
  return (
    <div className="our-work-section">
      <div className="slider">
        {ourWorkData.map((work, index) => (
          <div key={index} className="work-card">
            <img src={work.image} alt={work.title} className="work-image" />
            <h3 className="work-title">{work.title}</h3>
            <p className="work-description">{work.description}</p>
            <div className="work-tags">
              {work.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewWorkSection;
