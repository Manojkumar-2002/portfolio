import React, { useEffect, useRef } from 'react';
import DeveloperImage from '../assets/images/Developer.png';

const Home = () => {
    const homeRef = useRef(null);

    useEffect(() => {
        const setBodyHeight = () => {
            if (homeRef.current) {
                document.body.style.height = `${homeRef.current.offsetHeight}px`;
            }
        };

        setBodyHeight();
        window.addEventListener('resize', setBodyHeight);

        return () => {
            window.removeEventListener('resize', setBodyHeight);
        };
    }, []);

    return (
        <div
            id="home"
            ref={homeRef}
            className="min-vh-100 d-flex justify-content-center align-items-center"
        >
            {/* Layout without card, container is centered using flexbox */}
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">

                <div className="row w-100 text-center p-5">

                    {/* Heading */}
                    <div className="col-12 mb-5 mt-0">
                        <h1 className="display-3" style={{ fontFamily: 'Roboto, sans-serif', color: '#ff6347', fontWeight: '700' }}>
                            Welcome to My Portfolio
                        </h1>
                    </div>

                    {/* Left column: Developer image */}
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <img
                            src={DeveloperImage}
                            alt="Developer"
                            className="img-fluid rounded-circle border-5 border-primary"
                            style={{
                                maxWidth: '300px',
                                boxShadow: '0 0px 10px rgba(185, 42, 42, 0.72)', // Custom shadow effect
                            }}
                        />
                    </div>

                    {/* Right column: Description */}
                    <div className="col-12 col-md-6">
                        <p className="lead mt-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.8rem', color: '#FFFFFF' }}>
                            I'm Manoj Kumar,
                        </p>
                        <p className="lead mt-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.8rem', color: '#FFFFFF' }}>
                            Backend Developer at MNK GCS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
