import React from 'react'
import Button from '@mui/material/Button';
import "./About.css";
import about  from '../image/contact1.jpg';


const About = () => {
    return (
        <div className="About">

        <h2 className="About_heading">ABOUT ME</h2> 

        <div className="about_text">  
    
        <p>Hai, </p>
         <p>I am self-motivated, highly passionate and quickly adaptable person
         looking for an opportunity to work in a challenging organization where I
         can learn new skills, expand my knowledge and to work towards the
         growth of the organization to the best of my abilities.</p>

        </div> 
        <div className="About_image">

        <div>
        <img className="image" alt="about"  src={ about }/>
        </div>
        <div>
        <a href="https://drive.google.com/file/d/1e5wasI4N9z0OSovIdzET9VyS7ejwwWD1/view" target="_blank">
        <Button className="Resume_button">Resume</Button>
        </a>
        </div>
        </div>  

        </div>
    )
}

export default About
