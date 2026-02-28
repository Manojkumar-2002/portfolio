import React, { useState } from "react";
import { IoMdHome, IoMdPerson, IoMdCodeWorking, IoMdFolder, IoMdMail, IoMdDocument } from "react-icons/io";
import { FaBriefcase, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import NameIcon from "../../assets/images/Name.ico";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent border border-purple-600 sticky-top glass ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={NameIcon}
            alt="Name Icon"
            className="h-6 w-auto me-2"
            style={{ height: "24px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-white" href="#home">
                <IoMdHome className="me-2" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-white" href="#about">
                <IoMdPerson className="me-2" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-white" href="#skills">
                <IoMdCodeWorking className="me-2" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-white" href="#projects">
                <IoMdFolder className="me-2" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-white" href="#experience">
                <FaBriefcase className="me-2" /> Experience
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-white" to="/resume">
                <IoMdDocument className="me-2" /> Resume
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center text-white"
                href="https://github.com/Manojkumar-2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center text-white"
                href="mailto:vk.manoj2002@gmail.com"
              >
                <IoMdMail className="me-2" /> Email
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center text-white"
                href="https://www.linkedin.com/in/vk2002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
