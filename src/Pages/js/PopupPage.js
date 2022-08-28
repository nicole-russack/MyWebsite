
import React from "react";
import "/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/popUpPageStyle.css"
import image from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/laptopart.png';
import image1 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink1.png';
import image2 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink2.png';
import image3 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink3.png';
import image4 from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/DoorDrink4.png';


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
                <h1>{props.title}</h1>
            <div class = "portfolioImagesDiv"> 
              <img src={image1} class = "portfolioImages"></img>
                <img src={image2} class = "portfolioImages"></img>
                <img src={image3} class = "portfolioImages"></img>
                <img src={image4} class = "portfolioImages"></img>
            </div>
               
                <p>{props.description}</p>
                <p>Languages: Java</p>
                <p>Frameworks: FireBase, Junit, GoogleCloud API</p>
            </div>
      </div>
    </div>
  );
};

export default Popup;