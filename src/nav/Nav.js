import React from 'react';
import NavLink from '/Users/nicolerussack/nicole-russack-webpage/src/nav/NavLink.js';
import { navLinks } from '/Users/nicolerussack/nicole-russack-webpage/src/nav/navLinks.js';
import '/Users/nicolerussack/nicole-russack-webpage/src/nav/Nav.css';

const Nav = () => {
	return (
		<nav >
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	);
};

export default Nav;