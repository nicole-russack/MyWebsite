//display plain resume black background with a working download button 
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/NicoleRussackResume2.pdf';
import { useNav } from '/Users/nicolerussack/nicole-russack-webpage/src/customHooks/useNav.js';
import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/resumestyle.css'

const Resume = () => {

  const contactRef = useNav('Contact');

  return (
    <div class = 'wholeResumePage' ref={contactRef} id= 'resumeContainer'>
      <div  class = 'PageHeading' >
        <h1 class = "MyResumeHeading">My Resume</h1>
      </div>
      

      <div class = "JustResume">
        <Document file={Pdf}>
          <Page pageNumber={1} />
        </Document>
      </div>

       

      <div class = "button">
          <a class = "buttonText" href = {Pdf} target = "_blank">Download Pdf</a>
        </div>
    </div>



    
  );
};
  
export default Resume;