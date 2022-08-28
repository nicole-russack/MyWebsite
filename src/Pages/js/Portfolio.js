import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import image from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/vecteezy_computer-laptop-with-transparent-screen_8854312_335.png';
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/portfolio.css'

  
const Portfoilio = () => {
  return (
    <div class = "wholeporfolioPage" >
      <div class = "headingText">
        <h1 class = "MyPortfolioHeading"> My Portfoilio!</h1>
        <h2>Here is some of my recent work</h2>
      </div>


      <div class="WholeportfolioBoxes">

      <Row class="RowRow">        
        <Col class = "ColLeft">
            <ProjectCard
              imgPath={image}
              title="First title"
              description="First description"
            />
        </Col>
        <Col class = "ColRight">
          <ProjectCard
            imgPath={image}
            title="Usc Door Drink"
            description = "USCDoorDrink is an android application created in Java using Google Maps API, and Firebase. This application allows students to search for drinks on a map, order drinks, track their caffeine intake and get notified for recommendations. Sellers are be able to post their drink menus, and track order and delivery history."
          />
        </Col>
        <Col class = "ColCenter">
            <ProjectCard
              imgPath={image}
              title="First title"
              description="First description"
            />
        </Col>
      </Row>
      <Row class="RowRow">        
        <Col class = "ColLeft">
            <ProjectCard
              imgPath={image}
              title="First title"
              description="First description"
            />
        </Col>
        <Col class = "ColRight">
          <ProjectCard
            imgPath={image}
            title="First title"
            description="First description"
          />
        </Col>
        <Col class = "ColCenter">
            <ProjectCard
              imgPath={image}
              title="First title"
              description="First description"
            />
        </Col>
      </Row>
      

    </div>
    </div>

    
  );
};
  
export default Portfoilio;