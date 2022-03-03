import React from "react";
import Button from "@mui/material/Button";
import "./Projects.css";
import youtube from "../image/youtube.png";
import stack from "../image/stack.png";
import movielist from "../image/movielist.png";
import chat from "../image/chat.png";
import prettyshop from "../image/prettyshop.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Typography from "@mui/material/Typography";
import { Skills } from "./Skills";
import Popover from "@mui/material/Popover";

const data = [
  {
    name: "YouTube Clone",
    image: youtube,
    liveLink: "https://sad-nightingale-2f5997.netlify.app",
    gitFrontLink: "https://github.com/vinuppriyaB/f-youtube-clone",
    gitBackLink: "https://github.com/vinuppriyaB/back-yt",
    discription:
      "This is an clone of our favorite YouTube. Where we can create account, watch videos by search ,post videos and we can post comment and reply. Database Model was created by using Mongoose.",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB", "Mongoose"],
  },
  {
    name: "StackOverflow Clone",
    image: stack,
    liveLink: "https://distracted-hopper-a7aa6a.netlify.app",
    gitFrontLink: "https://github.com/vinuppriyaB/frontend-hack2",
    gitBackLink: "https://github.com/vinuppriyaB/hack2-node",
    discription:
      "This is an clone of StackOverFlow website. Where we can create account, see solution by search ,post our question in public for which we need solution and we can post solution to the other question.",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB"],
  },
  {
    name: "E-Commerce Website",
    image: prettyshop,
    liveLink: "https://suspicious-kare-885e10.netlify.app",
    gitFrontLink: "https://github.com/vinuppriyaB/Ecommerce-front",
    gitBackLink: "https://github.com/vinuppriyaB/Ecommerce-node",
    discription:
      " E-Commerce Web Application with authentication of User Login and Register. The Application has all the necessary features like add to cart and integrated with Stripe Payment Gateway. ",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB", "Mongoose", "Stripe"],
  },
  {
    name: "We talk",
    image: chat,
    liveLink: "https://zealous-morse-54b38e.netlify.app",
    gitFrontLink: "https://github.com/vinuppriyaB/frontend-we-talk",
    gitBackLink: "https://github.com/vinuppriyaB/backend-we-talk",
    discription:
      "This is chat application. It having functionality of authentication,send message to the respective person who have an account or created group. Using socket.io to make the application live",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB", "Mongoose"],
  },
];
export const Projects = () => {
  return (
    <div className="project_container" id="Project">
      <p className="project_heading">My WORKS</p>
      <p className="project_line">
        Here's some of my projects that I have worked on.
      </p>
      <div className="Project_cardContainer">
        {data.map((d, index) => (
          <ProjectCard
            key={index}
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
    </div>
  );
};

function ProjectCard({
  name,
  image,
  liveLink,
  gitFrontLink,
  gitBackLink,
  discription,
  by,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Card sx={{ width: 540, backgroundColor: "rgba(8, 46, 78)" }}>
      <Card
        style={{
          // width: 540,
          // height: 540,
          backgroundColor: "rgba(8, 46, 78)",
          color: "black",
          p: "10px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="300"
          style={{ objectFit: "cover" }}
          image={image}
        />
      </Card>

      <Card style={{ backgroundColor: "rgba(8, 46, 78)", color: "black" }}>
        <CardContent>
          <Typography
            gutterBottom
            // variant="h5"
            style={{ color: "rgba(234, 180, 30)", fontSize: "25px" }}
            component="div"
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "rgba(160, 167, 165)",
              fontSize: "20px",
            }}
          >
            {discription}
          </Typography>
        </CardContent>
        <CardActions>
          {by.map((s, index) => (
            <p className="project_skill">{s}</p>
          ))}
        </CardActions>
        <CardActions>
          <Button
            className="project_btn"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            Live <ChevronRightOutlinedIcon className="projectIcon" />
            <Popover
              id="mouse-over-popover"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              // disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>Credential</Typography>
              <Typography sx={{ p: 1 }}>Email : checkout@gmail.com</Typography>
              <Typography sx={{ p: 1 }}>password : qwerty</Typography>
            </Popover>
          </Button>
          <Button className="project_btn">
            client <GitHubIcon className="projectIcon" />
          </Button>
          <Button className="project_btn">
            server <GitHubIcon className="projectIcon" />
          </Button>
        </CardActions>
      </Card>
    </Card>
  );
}

function ProjectRow({
  name,
  image,
  liveLink,
  gitFrontLink,
  gitBackLink,
  discription,
  by,
}) {
  console.log(image);
  return (
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
            <Button className="project_button" variant="contained">
              Live
            </Button>
          </a>
          <a href={gitFrontLink} target="_blank">
            <Button className="project_button" variant="contained">
              Git FrontEnd
            </Button>
          </a>
          <a href={gitBackLink} target="_blank">
            <Button className="project_button" variant="contained">
              Git BackEnd
            </Button>
          </a>
        </div>
      </div>
      <div className="ProjectRow_image">
        <img className="Project_image" src={image} alt={name} />
      </div>
    </div>
  );
}

//   {
//     name: "Movie List",
//     image: movielist,
//     liveLink: "https://zealous-fermi-d50937.netlify.app",
//     gitFrontLink: "https://github.com/vinuppriyaB/react-movielist",
//     gitBackLink: "https://github.com/vinuppriyaB/node-movieproject",
//     discription:
//       "This project is my first full stack project ,where I learnt API calls, CRUD operation.Here we can edit,delete,add the movie details and display all details about movie.",
//     by: "Createdby ReactJS,Nodejs,Express,MongoDB,Mongoose ",
//   },
