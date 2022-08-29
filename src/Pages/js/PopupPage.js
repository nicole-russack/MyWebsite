import Button from "react-bootstrap/Button";

import React from "react";
import "/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/popUpPageStyle.css"
import image1 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink1.png';
import image2 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink2.png';
import image3 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink3.png';
import image4 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink4.png';
import { BsGithub } from "react-icons/bs";


const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
            <div style = {{
                    padding:'10px',
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Center',
                    flexDirection: 'column'
            }}>
            <h1 class = "PopUpPageTitle">{props.title}</h1>
            <div class = "portfolioImagesDiv"> 
              <img src={props.img1} className={(!props.phone ? 'portfolioImages' : 'phoneImagePortfolio')}></img>
                <img src={props.img2} className={(!props.phone ? 'portfolioImages' : 'phoneImagePortfolio')}></img>
                <img src={props.img3} className={(!props.phone ? 'portfolioImages' : 'phoneImagePortfolio')}></img>
                <img src={props.img4} className={(!props.phone ? 'portfolioImages' : 'phoneImagePortfolio')}></img>
            </div>

        
        <div class ="PopupBoxDiv">
          <h2>{props.description}</h2>
          <div class ="PopupBoxTags">
            <h2 class ="PopupBoxText"> <span style={{fontSize:"40px", color:"#010440"}}>Laungeges: </span> {props.Language}</h2>
            {props.tools ? <h2 class ="PopupBoxText"><span style={{fontSize:"40px", color:"#010440"}}>Frameworks: </span>  {props.tools}</h2> : null}
            {props.awards ?  <h2 class ="PopupBoxText"><span style={{fontSize:"40px", color:"#010440"}}>Awards: </span>{props.awards}</h2> : null}

           
          </div>
        </div>
        <div class = "GithubButton" >
          <BsGithub/> 
          <a class = "GithubButtonText" href = {props.Link} target = "_blank">    Github</a>
        </div>
        
               
               
  
            </div>
      </div>
    </div>
  );
};

export default Popup;