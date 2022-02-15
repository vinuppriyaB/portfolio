import React from 'react';
import Button from '@mui/material/Button';
import "./Projects.css";
import youtube from '../image/youtube.png';
import stack from '../image/stack.png';
import movielist from '../image/movielist.png';
import prettyshop from '../image/prettyshop.png';



 const data=[
    {
        name:"YouTube Clone",
        image:youtube,
        liveLink:"https://sad-nightingale-2f5997.netlify.app",
        gitFrontLink:"https://github.com/vinuppriyaB/f-youtube-clone",
        gitBackLink:"https://github.com/vinuppriyaB/back-yt",
        discription:"This is an clone of our favorite YouTube. Where we can create account, watch videos by search ,post videos and we can post comment and reply. Database Model was created by using Mongoose",   
        by:"Createdby ReactJS,Nodejs,Express,MongoDB,Mongoose "
    },
    {
        name:"StackOverflow Clone",
        image:stack,
        liveLink:"https://distracted-hopper-a7aa6a.netlify.app",
        gitFrontLink:"https://github.com/vinuppriyaB/frontend-hack2",
        gitBackLink:"https://github.com/vinuppriyaB/hack2-node",
        discription:"This is an clone of StackOverFlow website. Where we can create account, see solution by search ,post our question in public forr which we need solution and we can post solution to the other question",   
        by:"Createdby ReactJS,Nodejs,Express,MongoDB"
    },
    {
        name:"E-Commerce Website",
        image:prettyshop,
        liveLink:"https://suspicious-kare-885e10.netlify.app",
        gitFrontLink:"https://github.com/vinuppriyaB/Ecommerce-front",
        gitBackLink:"https://github.com/vinuppriyaB/Ecommerce-node",
        discription:"This is wesite of 'PRETTY' shop. It having fuctionality of search products by filter and add to cart. Using Stripe API for payment processing.",   
        by:"Createdby ReactJS,Redux, Nodejs,JWT, Express, MongoDB,Mongoose ,Stripe"
    },
    {
        name:"Movie List",
        image:movielist,
        liveLink:"https://zealous-fermi-d50937.netlify.app",
        gitFrontLink:"https://github.com/vinuppriyaB/react-movielist",
        gitBackLink:"https://github.com/vinuppriyaB/node-movieproject",
        discription:"This project is my first full stack project ,where I learnt API calls, CRUD operation.Here we can edit,delete,add the movie details and display all details about movie",   
        by:"Createdby ReactJS,Nodejs,Express,MongoDB,Mongoose "
    }
]
export const Projects = () => {
    return (
        <div className="project">
        <h2 className="project_heading">MY WORKS</h2>
        {data.map((d,index)=>(
            <ProjectRow
            name={d.name}
            image={d.image}
            liveLink={d.liveLink}
            gitFrontLink={d.gitFrontLink}
            gitBackLink={d.gitBackLink}
            discription={d.discription}
            by={d.by}
            />
        ))}
            
        </div>
    )
}

function ProjectRow({name,image,liveLink,gitFrontLink,gitBackLink,discription,by}){
    console.log(image)
    return(
        <div className="projectRow">


            <div className="projectRow_text"> 
                <div className="project_name">
                <h4>{name}</h4>
                </div>
                <div className="project_description">
                <p>{discription}</p>
                </div>
                <div className="project_by">
                <p>{by} </p>
                </div>
                <div className="project_buttons">
                <a href={liveLink} target="_blank">
                <Button className="project_button" variant="contained">Live</Button>
                </a>
                <a href={gitFrontLink} target="_blank">
                <Button className="project_button" variant="contained">Git FrontEnd</Button>
                </a>        
                <a href={gitBackLink} target="_blank">
                <Button className="project_button"  variant="contained">Git BackEnd</Button>
                </a>
                </div>
            </div>
            <div className="ProjectRow_image">
            <img className="Project_image" src={ image } alt={name} />
            </div>
        </div>

    )
}
