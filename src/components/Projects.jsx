import React, { useEffect, useState } from 'react';
import { IoInformationCircleOutline, IoClose } from 'react-icons/io5';
import projectData from '../assets/projects.json';
import mnksys from '../assets/images/mnksys.png';
import smga from '../assets/images/smga.png';
import pdf from '../assets/images/pdf.png';
import biz from '../assets/images/biz.png';
import bank from '../assets/images/bank.png';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const imageMap = {
    mnksys,
    smga,
    pdf,
    biz,
    bank
  };

  const getProjectDetails = (projectTitle) => {
    const projectMap = {
      'MNKSYS - Insurance Broking Ecosystem': {
        title: 'MNKSYS - Insurance Broking Ecosystem',
        details: [
          'Built contract and endorsement reporting module using optimized PostgreSQL queries for high-volume financial data.',
          'Implemented secure bank transaction ingestion by decrypting PGP-encrypted files and automatically persisting daily transactions.'
        ]
      },
      'SMGA - Access & Ops Management': {
        title: 'SMGA - Access & Ops Management',
        details: [
          'Implemented OAuth 2.0 (access/refresh tokens), Microsoft SSO, and OTP-based multi-factor login.',
          'Designed role-based and branch-based access control for multi-branch organization structures.'
        ]
      },
      'SignStamp Microservice': {
        title: 'SignStamp Microservice',
        details: [
          'Async PDF processing via Celery + AWS SQS/S3 with event-driven email notifications.'
        ]
      },
      'Business Card AI': {
        title: 'Business Card AI',
        details: [
          'Built OCR extraction service using AWS Bedrock and REST APIs.'
        ]
      },
      'BankMatch AI': {
        title: 'BankMatch AI',
        details: [
          'Engineered automated financial reconciliation using OpenAI and Celery.'
        ]
      }
    };
    return projectMap[projectTitle];
  };

  return (
    <div id="projects" className="min-vh-100 pt-5 text-white">
      <div className="container mt-4">
        <h1 className="font-weight-bold text-3xl mb-4 text-center text-white">Projects</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-8" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <div className="card text-center border-2 border-purple-600 shadow-lg bg-transparent">
                <img
                  src={imageMap[project.image]}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-white">{project.title}</h5>
                  <p className="card-text text-white">{project.description}</p>
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-outline-light w-100"
                    onClick={() => setSelectedProject(project)}
                  >
                    <IoInformationCircleOutline className="me-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '10px',
              padding: '30px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              <IoClose />
            </button>
            
            <h3 className="text-white mb-3">{selectedProject.title}</h3>
            <p className="text-white mb-3">
              <strong>Company:</strong> {selectedProject.description}
            </p>
            <p className="text-white mb-3">
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
            <h5 className="text-info mb-3">Key Achievements:</h5>
            <ul className="text-white text-start">
              {getProjectDetails(selectedProject.title)?.details.map((detail, idx) => (
                <li key={idx} className="mb-2">{detail}</li>
              ))}
            </ul>
            <button 
              className="btn btn-secondary mt-3 w-100"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
