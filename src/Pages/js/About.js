import React from 'react';
import headshot from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/NewNewImage.jpg'
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/aboutStyle.css'
import CarouselPart from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/PhotoCarocel.js'
const About = () => {
  return (
    <div class="wholePage" id = "aboutContainer">    
    <div class = "headingText">
        <h1 class = "MyPortfolioHeading"> About</h1>
      </div>  
      <div class = "ImageAndText">
       <div class = "JustImage">
         <img src = {headshot} style = {{
           borderRadius: '50%',
           marginLeft:'5vh', width:'550px', height:'550px' }}/>
        </div>
        
        <div class = "InsideText">
          <h1 class = "textInBox">Hi, I'm Nicole!</h1>
          <p class = "textInBox">I am a current Junior at University of Southern California studying Computer Science and Business Administration. 
           I have been interested in software development since middle school and am so happy to have it as a career. In my free time
           I also enjoy crochetting, animals, and exploring LA.
          </p>
        </div>
      </div>

      <div class = "otherAboutMeText">
        <p class ="Actultext"> <span style={{fontSize:"40px", color:"#010440"}}>Relevent coursework: </span> Software Engineering, Data structures and Object-Oriented Design (C++), Principles of
Software Development (Java), Introduction to Algorithms, Introduction to Artificial Intelligence (Python)</p>
        <p class ="Actultext"><span style={{fontSize:"40px", color:"#010440"}}>Languages: </span>  React JS, Java, JavaScript, R, Python, C++, Swift, HTML5, CSS, NodeJS, Kotlin, SQL</p>
        <p class ="Actultext"><span style={{fontSize:"40px", color:"#010440"}}>Frameworks: </span> Amazon Web Services (AWS), Distributed Systems Management, Linux System Administration, MATLAB</p>
        <p class ="Actultext"><span style={{fontSize:"40px", color:"#010440"}}>Awards: </span>CURVE Researcher, USC Presidential Merit Scholar, USC Viterbi Dean's List, SCOPE Hackathon second 
          place best project, HACKSC 2nd best use of google cloud, CSCI 310 Best Project</p>
        <p class ="Actultext"><span style={{fontSize:"40px", color:"#010440"}}>Intrests of school: </span>Running, Cooking, Entrepreneurship, Hedgehogs, Yoga, Pickleball, Triathlons, Crocheting, Transit</p>
      </div>
        
      {/* <div style = {{margin: "30px"}}>
        <CarouselPart/>
      </div> */}
      
      
      
      
    </div>
  );
};
  
export default About;