//display plain resume black background with a working download button 
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/NicoleRussackResume.pdf';

import '/Users/nicolerussack/nicole-russack-webpage/src/Pages/css/resumestyle.css'

const Resume = () => {

  
  return (
    <div class = 'wholeResumePage'>
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