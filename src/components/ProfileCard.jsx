import React from "react";
import soloLeveling from "../assets/solo-leveling.jpg";
import dailyDev from "../assets/dailyDev.png";
import AmanLogo from "../assets/amand-logo.jpg";

import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function ProfileCard() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={soloLeveling}
          alt="my profile photo"
          className="profile-img"
        ></img>
        <h2 className="profile-name">Amandeep</h2>
        <p className="profile-location">Hyderabad, India</p>
        <p className="profile-bio">Full Stack Developer</p>
        <div className="profile-links">
          <a
            href="https://github.com/Amandeep563"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span> GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amandeep-bollampalli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            LinkedIn
          </a>
          <a
            href="https://x.com/amandeep265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            Twitter
          </a>

          <a
            href="https://app.daily.dev/amandeep58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dailyDev} alt="daily.dev" width="24" height="24" />
            daily.dev
          </a>

          <a
            href="https://aman-portfolio-amber-one.vercel.app/"
            target="_blank"
            rel="noopener noerferrer"
          >
            <img src={AmanLogo} alt="Amandeep Logo" width="24" height="24" />
            Aman Portfolio
          </a>

          {/* <a
            href="https://www.codedex.io/@amandeep5018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codedex} alt="daily.dev" width="24" height="24" />
            Codédex
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
