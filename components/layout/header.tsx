import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Menu } from "./menu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-light">
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/static/logo.png"
              style={{ height: "50px", width: "125px" }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Menu />
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
};
