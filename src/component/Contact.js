import React from 'react'
import "./Contact.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import image from "../image/contact.jpg";
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <div className="contact">
        <h2 className="Contact_heading">CONTACT DETAILS</h2>
        <div className="contact_imagebox">
        <img alt="contact us" className="contact_image"  src={ require("../image/contact.jpg") }/>
        </div>
        <div className="contact_text">
        <div className="text_details">
        <p>For</p>
        <p>Question or comment?</p>
        <p>Use the contact details below to get in touch with us:</p>
        </div>
        <div className="contact_icon"> 
        <div>
        <a href="https://github.com/vinuppriyaB" target="_blank">
        <GitHubIcon className="icon"/>

        <p>Github</p>
        </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/vinuppriya-balachandran-a7446456/" target="_blank">
        <LinkedInIcon className="icon"/>

         <p>Linkedin</p>
         </a>

        </div>
        <div>
        <EmailIcon className="icon"/>
        <Link>
        <p>Email</p>
        </Link>
        </div>


        </div>
        
        <div className="contact_mail">

        <h2>vinuppriya.b@gmail.com</h2>


        </div>
        </div>
            
        </div>
    )
}


