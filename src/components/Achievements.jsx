import React from 'react';
import { FaTrophy } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      title: 'Best Employee Award 2025',
      organization: 'MNK GCS',
      description: 'Recognized for exceptional ownership and delivery of mission-critical projects.',
      icon: '🏆'
    }
  ];

  return (
    <div id="achievements" className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-4 text-white">Achievements</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-5" />
        <div className="row justify-content-center">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-md-8 col-lg-6 mb-4">
              <div className="card bg-transparent border-2 border-warning shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>
                    {achievement.icon}
                  </div>
                  <h3 className="card-title text-warning mb-2">{achievement.title}</h3>
                  <h5 className="text-white mb-3">{achievement.organization}</h5>
                  <p className="card-text text-white">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
