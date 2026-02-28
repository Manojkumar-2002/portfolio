import React, { useEffect, useState } from 'react';
import experienceData from '../assets/experience.json'; // Import the experience data from JSON
import { FaBriefcase } from 'react-icons/fa'; // For the job icon

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <div id="experience" className="text-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-4">My Experience</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-8" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center">
          {experiences.map((experience, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <div className="card h-100 border-light rounded-lg bg-transparent hover-zoom w-100 glass">
                <div className="card-body">
                  {/* Job Title with Color */}
                  <h5 className="card-title text-2xl font-semibold mb-2 text-primary">
                    <FaBriefcase className="me-2" />
                    {experience.title}
                  </h5>
                  
                  {/* Date Range with Different Color */}
                  <p className="text-lg text-warning">{experience.dates}</p>

                  {/* Company Name and Location with Another Color */}
                  <p className="text-lg font-medium text-success">
                    {experience.company} ({experience.location})
                  </p>

                  {/* Responsibilities */}
                  <ul className="list-unstyled mt-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
