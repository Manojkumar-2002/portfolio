import './Resume.css';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <>
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 10000,
          background: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
      >
        <IoMdClose />
      </button>
      <div className="resume-wrapper">
      <aside className="sidebar">
        <div className="name-container">
          <h1>MANOJ<br />KUMAR</h1>
          <span className="role">Backend Developer</span>
        </div>

        <div className="side-section">
          <h2>CONTACT</h2>
          <div className="contact-info">
            <div>📍 Bengaluru, India</div>
            <div>📧 <a href="mailto:vk.manoj2002@gmail.com">vk.manoj2002@gmail.com</a></div>
            <div>🔗 <a href="https://www.linkedin.com/in/vk2002">linkedin.com/in/vk2002</a></div>
          </div>
        </div>

        <div className="side-section">
          <h2>STACK</h2>
          <div className="skills-grid">
            {['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'AWS SQS/S3', 'AWS Bedrock AI', 'OpenAI', 'OAuth 2.0', 'SSO', 'Docker', 'Git', 'PGP'].map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="side-section">
          <h2>EDUCATION</h2>
          <div className="edu-title">B.E. Computer Science and Engineering</div>
          <div className="edu-college">UCEN Nagercoil</div>
          <div className="edu-year">2020 — 2024</div>
        </div>
      </aside>

      <main className="main-content">
        <section>
          <div className="section-title">EXECUTIVE SUMMARY</div>
          <div className="summary-box">
            I am a dedicated Backend Developer with extensive experience in building Django-based systems and distributed microservices. My expertise encompasses async processing using Celery, document/data extraction through AI, secure authentication systems, and robust financial transaction ingestion. I have a proven track record of delivering high-quality solutions and have been recognized as the Best Employee for my contributions.
          </div>
        </section>

        <section>
          <div className="section-title">PROFESSIONAL EXPERIENCE</div>
          
          <div className="job-card">
            <div className="entry-header">
              <span className="job-title">Backend Developer | MNK GCS</span>
              <span className="date-badge">Feb 2025 — Present</span>
            </div>
            <div className="job-location">Bengaluru, India</div>

            <span className="project-highlight">MNKSYS - Insurance Broking Ecosystem</span>
            <ul>
              <li>Built contract and endorsement reporting module using optimized PostgreSQL queries for high-volume financial data.</li>
              <li>Implemented secure bank transaction ingestion by decrypting PGP-encrypted files and automatically persisting daily transactions.</li>
            </ul>

            <span className="project-highlight">SMGA - Access & Ops Management</span>
            <ul>
              <li>Implemented OAuth 2.0 (access/refresh tokens), Microsoft SSO, and OTP-based multi-factor login.</li>
              <li>Designed role-based and branch-based access control for multi-branch organization structures.</li>
            </ul>

            <span className="project-highlight">Distributed Microservices</span>
            <ul>
              <li><strong>SignStamp Microservice:</strong> Async PDF processing via Celery + AWS SQS/S3 with event-driven email notifications.</li>
              <li><strong>Business Card AI:</strong> Built OCR extraction service using AWS Bedrock and REST APIs.</li>
              <li><strong>BankMatch AI:</strong> Engineered automated financial reconciliation using OpenAI and Celery.</li>
            </ul>
          </div>

          <div className="job-card">
            <div className="entry-header">
              <span className="job-title">Python/Django Intern | MNK GCS</span>
              <span className="date-badge">Nov 2024 — Jan 2025</span>
            </div>
            <ul>
              <li>Contributed to core backend modules; converted to full-time based on high-impact delivery and project ownership.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="section-title">HONORS & AWARDS</div>
          <div className="award-banner">
            <div className="award-icon">🏆</div>
            <div>
              <div className="award-title">BEST EMPLOYEE AWARD — 2025</div>
              <div className="award-desc">Awarded for exceptional ownership and delivery of mission-critical projects.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Resume;
