import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbar';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>
          Home
          </NavLink>
          <NavLink to='/About' activeStyle>
          About
          </NavLink>
          <NavLink to='/Portfolio' activeStyle>
          Portfolio
          </NavLink>
          <NavLink to='/Resume' activeStyle>
          Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;