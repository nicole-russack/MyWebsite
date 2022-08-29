import React, { useEffect, useState } from "react";
import Popup from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/PopupPage.js';
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/projectCardsStyle.css';
import { FaTrophy } from 'react-icons/fa';
import { FaRegFileCode } from 'react-icons/fa';



const About = props => {

  const {
    title,
    description,
    phone,
    imgPath,
    tools,
    awards,
    Longdescription,
    Language,
    LongAward,
    Link,
    img1, img2, img3, img4
  } = props

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    
    <div
    onClick={togglePopup}
    class = "mainSheetStyleDiv" >
        <img class = "LaptopImage" src = {imgPath}></img>
        <h1 class = "ProjectHeading">{title}</h1>
        <p class = "MainParagraph">{description}</p>
        <div class = "tags">
          <p class = "iconText"><FaRegFileCode style ={{color:'#010440'}}/> {Language}</p>
          
          {awards ? <p class = "iconText">< FaTrophy style={{color:'gold'}}/> {awards}</p> : null}
          

        </div>
        
        


      {isOpen && <Popup
        content={<>
          title:test
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>}
        title={title}
        description={Longdescription}
        handleClose={togglePopup}
        tools = {tools}
        awards = {LongAward}
        Language = {Language}
        Link = {Link}
        img1 = {img1}
        img2 = {img2}
        img3 = {img3}
        img4 = {img4}
        phone = {phone}
      />}
      
    </div>
  );
};
  
export default About;