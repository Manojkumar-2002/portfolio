import React from 'react';
import {
  DiPython,
  DiDjango,
  DiPostgresql,
  DiDocker,
  DiGit,
} from "react-icons/di";
import {
  SiCelery,
  SiAmazon,
  SiOpenai,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <DiPython className='skill-icon fs-1 text-warning' alt="Python Icon" />, name: 'Python' },
    { icon: <DiDjango className='skill-icon fs-1 text-success' alt="Django Icon" />, name: 'Django/DRF' },
    { icon: <DiPostgresql className='skill-icon fs-1 text-info' alt="PostgreSQL Icon" />, name: 'PostgreSQL' },
    { icon: <SiCelery className='skill-icon fs-1 text-success' alt="Celery Icon" />, name: 'Celery' },
    { icon: <SiAmazon className='skill-icon fs-1' style={{ color: '#FF9900' }} alt="AWS Icon" />, name: 'AWS' },
    { icon: <SiOpenai className='skill-icon fs-1' style={{ color: '#10A37F' }} alt="OpenAI Icon" />, name: 'OpenAI' },
    { icon: <DiDocker className='skill-icon fs-1 text-primary' alt="Docker Icon" />, name: 'Docker' },
    { icon: <DiGit className='skill-icon fs-1 text-danger' alt="Git Icon" />, name: 'Git' },
  ];

  const tools = [
    { name: 'OAuth 2.0 / SSO' },
    { name: 'AWS SQS/S3' },
    { name: 'AWS Bedrock AI' },
    { name: 'PGP Encryption' },
  ];

  return (
    <div id="skills" className="container my-5 min-vh-100 align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="font-weight-bold mb-4 text-white ">Technologies I Know</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-4" />
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {skills.map((skill, index) => (
            <div key={index} className='col'>
              <div className='card p-3 shadow-sm bg-transparent rounded-lg'>
                <div className="card-body text-center border-light glass">
                  <div className="mb-2">{skill.icon}</div>
                  <p className="mt-2 text-white">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="font-weight-bold mb-4 text-white">Additional Skills</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-4" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {tools.map((tool, index) => (
            <div key={index} className='col'>
              <div className='card p-3 shadow-sm bg-transparent rounded-md'>
                <div className="card-body text-center border-light glass">
                  <p className="mt-2 text-white fw-bold">{tool.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
