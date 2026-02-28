import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/images/about.png';
import { ImPointRight } from 'react-icons/im';

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="about" className="min-vh-100 d-flex align-items-center justify-content-center bg-transparent-100 py-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 text-danger mb-4">About Me</h1>
            <hr className="mb-4" />
            <p className="mb-4">
              Hi, I'm Manoj Kumar, a Backend Developer at MNK GCS in Bengaluru, specializing in building scalable Django-based systems and distributed microservices.
            </p>
            <p className="mb-4">
              I design and develop high-performance backend solutions with expertise in async processing (Celery), AI-powered document extraction (AWS Bedrock, OpenAI), secure authentication (OAuth 2.0, SSO), and financial data processing. My work directly impacts insurance broking operations and enterprise access management systems.
            </p>
            <p className="mb-4">
              I hold a BE in Computer Science & Engineering from UCEN Nagercoil (2020-2024) with hands-on experience in delivering mission-critical enterprise solutions.
            </p>
            <p className="mb-4">
              <strong>Core Competencies:</strong> Python, Django/DRF, PostgreSQL, Celery, AWS (SQS/S3/Bedrock), OpenAI, Docker, Microservices Architecture
            </p>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img className="img-fluid rounded-lg shadow-about" src={AboutImg} alt="About me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
