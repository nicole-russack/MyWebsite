import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import image from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/vecteezy_computer-laptop-with-transparent-screen_8854312_335.png';
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/portfolio.css'
import cameratrapHome from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/CameraTrapLayoutOverlay.png'
import cameratrap1 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/Screen Shot 2022-08-28 at 5.47.38 PM.png'
import cameratrap2 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/Screen Shot 2022-08-28 at 5.47.56 PM.png'
import cameratrap3 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/Screen Shot 2022-08-28 at 5.48.14 PM.png'

import doordrinkHome from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink1.png'
import doordrinkimage1 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink1.png';
import doordrinkimage2 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink2.png';
import doordrinkimage3 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink3.png';
import doordrinkimage4 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink4.png';


import VibeCheckHome from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/VibeCheckHomePageLaptop.png'
import VibeCheckimgae1 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/VibeCheckHome (1).png'
import VibeCheckimgae2 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/VibeCheckImage2.png'
import VibeCheckimgae3 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/VibeCheckImage3.png'
import VibeCheckimgae4 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/VibeCheckImage4.png'

const Portfoilio = () => {
  return (
    <div class = "wholeporfolioPage"  id='profileContainer'>
      <div class = "headingText">
        <h1 class = "MyPortfolioHeading"> My Portfoilio!</h1>
        <h2>Check out some of my recent work</h2>
      </div>


      <div class="WholeportfolioBoxes">

      <Row class="RowRow">        
        <Col class = "ColLeft">
            <ProjectCard
              imgPath={cameratrapHome}
              img1 = {cameratrap1}
              img2 = {cameratrap3}
              title="Camera Trap Layout"
              description = "Web application for research to gauge the effectiveness of camera trap placement for conservation efforts."
              Longdescription = "The Camera Trap layout project is a part of the Center For AI (CAIS) lab at USC. Our goal is to give conservationists a place to asses their camera placement for accuracy. This model includes a front end created in Python with the Mapbox API for users to place traps based on a file of locations or the option to drag and place markers. The backend is created with Python and connected through Ajax. The backend runs a model on the accuracy of these placements and reports back to the front end."
              Language = "Python"
              tools="MapBox, Ajax, GDAL"
              awards = "CURVE Funding"
              LongAward = "Center for Undergraduate Research in Viterbi Engineering research grant was awarded"
              Link = "https://github.com/Dilkina-Lab/CameraTrapWebpageFrontend"
            />
        </Col>
        <Col class = "ColRight">
          <ProjectCard
            imgPath={doordrinkHome}
            img1 = {doordrinkimage1}
            img2 = {doordrinkimage2}
            img3 = {doordrinkimage3}
            img4 = {doordrinkimage4}
            phone = 'true'
            title="USC Door Drink"
            description = "An Android application for students to order drinks, similar to Doordash and UberEats."
            Longdescription = "USCDoorDrink is an android application developed by Sunny Side Up that allows students to search for drinks on a map, order drinks, have them delivered, track their caffeine intake, and get notified for recommendations. Sellers can post their drink menus and track order and delivery history. This project was created with 2 other students (Olivia Du and  Ipek Goktan) in our CSCI 310 class."
            Language = "Java"
            tools="Google Maps API, Firebase, JUnit, Espresso"
            awards = "Best Project in the Class"
            LongAward = "Best Project in CSCI 310 Class (out of 20 other projects)"
            Link = "https://github.com/oliviaaduu/USCDoorDrink"
          />
        </Col>
        <Col class = "ColCenter">
            <ProjectCard
              imgPath={VibeCheckHome}
              img1 = {VibeCheckimgae1}
              img2 = {VibeCheckimgae2}
              img3 = {VibeCheckimgae3}
              img4 = {VibeCheckimgae4}
              title="Vibe Check"
              description = "A web application that analyzes users’ Instagram posts, visualizes their overall vibe, and gives suggestions on how to increase engagement with their profile."
              Longdescription = "We first made a low-fidelity model using Figma and continued to develop the idea going from our design. After finalizing the features we wanted to include in Vibe Check, we created a web application based on the final design components using React. We then used the Meta API to connect to an individual Instagram account and return the links to different posts and specific data, such as the number of likes and comments. We used an express server that handles Axios post calls in order to make these Meta API calls. From there, we used the Google Vision API, which when given an image would return the top colors and the emotions of the people in these pictures. The information collected by these API calls are displayed on our React App."
              tools = "Meta API, Google Vision API, Figma, Express, Axios"
              Language= "React JS, Node JS"
              awards = "Hack SC 2nd Best Use of Google Cloud"
              LongAward = "Hack SC 2nd Best Use of Google Cloud. Over 100 teams participated in the hackathon"
              Link = "https://github.com/ipekgoktan/VibeCheck"
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
              imgPath={VibeCheckHome}
              img1 = {VibeCheckimgae1}
              img2 = {VibeCheckimgae2}
              img3 = {VibeCheckimgae3}
              img4 = {VibeCheckimgae4}
              title="Portfoilio Website"
              description = "This site!"
              Longdescription = "I wanted a site to show what I have been working on and to show my progress as a software engineer. I created this site using React JS and hoasted it using Github Pages."
              Language= "React JS"
              Link = "https://github.com/nicole-russack/MyWebsite"
            />
        </Col>
      </Row>
      

    </div>
    </div>

    
  );
};
  
export default Portfoilio;