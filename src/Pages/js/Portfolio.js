import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import image from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/vecteezy_computer-laptop-with-transparent-screen_8854312_335.png';
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/portfolio.css'
import cameratrap from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/CameraTrapLayoutOverlay.png'
  
const Portfoilio = () => {
  return (
    <div class = "wholeporfolioPage"  id='profileContainer'>
      <div class = "headingText">
        <h1 class = "MyPortfolioHeading"> My Portfoilio!</h1>
        <h2>Here is some of my recent work</h2>
      </div>


      <div class="WholeportfolioBoxes">

      <Row class="RowRow">        
        <Col class = "ColLeft">
            <ProjectCard
              imgPath={cameratrap}
              title="Camera Trap Layout"
              description="Web application created for Center for AI in Society Lab at USC, with a Python frontend and backend."
              tools="Python, Mapbox"
              awards = "CURVE fellowship won for project"
            />
        </Col>
        <Col class = "ColRight">
          <ProjectCard
            imgPath={image}
            title="Usc Door Drink"
            description="This is a mobile application which students to search for drinks on a map, order drinks, track their caffeine intake and get notified for recommendations. Sellers are be able to post their drink menus, and track order and delivery history."
            tools="Java, Google Maps API, Firebase."
            awards = "Best Project in the class"
          />
        </Col>
        <Col class = "ColCenter">
            <ProjectCard
              imgPath={image}
              title="Vibe Check"
              description="First description"
            />
        </Col>
      </Row>
      <Row class="RowRow">        
        <Col class = "ColLeft">
            <ProjectCard
              imgPath={image}
              title="Scheduler"
              description="First description"
            />
        </Col>
        <Col class = "ColRight">
          <ProjectCard
            imgPath={image}
            title="Scope Cup"
            description="First description"
          />
        </Col>
        <Col class = "ColCenter">
            <ProjectCard
              imgPath={image}
              title="Portfolio Website"
              description="First description"
            />
        </Col>
      </Row>
      

    </div>
    </div>

    
  );
};
  
export default Portfoilio;