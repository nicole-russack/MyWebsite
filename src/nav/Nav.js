import NavLink from '/Users/nicolerussack/nicole-russack-webpage/src/nav/NavLink.js';
import { navLinks } from '/Users/nicolerussack/nicole-russack-webpage/src/nav/navLinks.js';
import '/Users/nicolerussack/nicole-russack-webpage/src/nav/Nav.css';
import React, { useState, useEffect } from "react"



const Nav = () => {
	//navbar scroll when active state
	const [navbar, setNavbar] = useState(window.scrollY)
  
	//navbar scroll changeBackground function
	const changeBackground = () => {
		setNavbar(window.scrollY)
	}
  
	useEffect(() => {
	  changeBackground()
	  window.addEventListener("scroll", changeBackground)
	})


	
	return (
		<nav style = {{backgroundColor: "rgb(" + (240 - (navbar/30)) + ", " + (224 - (navbar/19)) +",  "  + (5 + (navbar/26)) + ", .9)"}}>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink  key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
			
		</nav>
		
	);
};

export default Nav;