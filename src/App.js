import React from 'react';
import './App.css';
import Navbar from './Components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/app.js';
import About from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/About.js';
import Portfolio from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/Portfolio.js';
import Resume from '/Users/nicolerussack/nicole-russack-webpage/src/Pages/js/Resume.js';

  
function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/Home' element={<Home/>} />
    //     <Route path='/About' element={<About/>} />
    //     <Route path='/Resume' element={<Resume/>} />
    //     <Route path='/Portfolio' element={<Portfolio/>} />
    //   </Routes>
    // </Router>
        <div>
          <Home/>
          <About/>
          <Portfolio/>
          <Resume/>
        </div>
  );
}
  
export default App;