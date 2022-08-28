import React from 'react';
import headshot from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/NicoleRussackHeadshot.jpg'
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/aboutStyle.css'

const About = () => {
  return (
    <div class="wholePage">      
      <div class = "ImageAndText">
       <div class = "JustImage">
         <img src = {headshot} style = {{
           borderRadius: '50%',
           marginLeft:'5vh', width:'60vh'  }}/>
        </div>
        
        <div class = "InsideText">
          <h1>Welcome to the About Page</h1>
          <p>Text about me and how cool I am </p>
        </div>
      </div>

      {/* <div style={{color:'white', textAlign: 'left', margin:40}}>
        <p>Relevent coursework</p>
        <p>Languages</p>
        <p>Awards</p>
        <p>Outside of school</p>
        <p>Fun photo gallary????</p>
      </div>
       */}
      
      
    </div>
  );
};
  
export default About;