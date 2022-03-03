import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import image from "../image/contact.jpg";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="Contact_container" id="Contact">
      <div className="contact_text">
        <p className="Contact_heading">Let's connect</p>
        <div className="text_details">
          <p>For</p>
          <p>Question or comment?</p>
          <p>Use the contact details below to get in touch with us:</p>
        </div>
        <div className="contact_Link">
          <div>
            <a href="https://github.com/vinuppriyaB" target="_blank">
              <GitHubIcon className="contact_icon" />

              <p>Github</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/vinuppriya-balachandran-a7446456/"
              target="_blank"
            >
              <LinkedInIcon className="contact_icon" />

              <p>Linkedin</p>
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox"
              target="_blank"
            >
              <EmailIcon className="contact_icon" />

              <p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
