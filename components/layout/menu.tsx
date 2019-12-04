import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";

export const Menu = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <NavLink href="/blog">Blog</NavLink>
      </NavItem>
      <NavItem>
        <Link href="/podcast">
          <NavLink>Podcast</NavLink>
        </Link>
      </NavItem>
    </Nav>
  )
}
