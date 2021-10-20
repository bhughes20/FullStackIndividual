import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img 
            src="https://www.allstateni.com/resources/AllstateNI/images/2019_all_northire_hor_rgb_rev.png?v=96818f0e-c804-572c-dde4-ca47a6e07a13" 
            alt="Allstate NI logo"
            style={{width:250}}
          />
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeClassName="active">
            Get Quote
          </NavLink>
          <NavLink to="/admin" activeClassName="active">
            Admin
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
