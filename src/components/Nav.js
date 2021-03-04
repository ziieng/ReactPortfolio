import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
import Links from "./Links"

function TopNav() {
  const location = useLocation()
  const [activePage, setActivePage] = useState("")

  useEffect(() => {
    setActivePage(location.pathname)
  }, [location.pathname, activePage])

  return (
    <Navbar variant="dark" className="d-flex justify-content-between" expand="lg">
      <Navbar.Brand className="mt-0" as={Link} to="/">
        Zii Engelhardt
      </Navbar.Brand>
      {/* Establish hamburger for narrow screens */}
      <Navbar.Toggle aria-controls="CollapsedNav" />
      {/* Navigation here down collapses on narrower screens */}
      <Navbar.Collapse className="ml-5 " id="CollapsedNav">
        <Nav className="mt-0 mx-auto h4">
          <Nav.Item>
            <Links.Email as={Nav.Link} />
          </Nav.Item>
          <Nav.Item>
            <Links.GitHub as={Nav.Link} />
          </Nav.Item>
          <Nav.Item>
            <Links.LinkedIn as={Nav.Link} />
          </Nav.Item>
          <Nav.Item>
            <Links.Resume as={Nav.Link} />
          </Nav.Item>
        </Nav>
        <Nav className="mt-0">
          <Nav.Item>
            <Link className={(activePage === "/contact") ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={(activePage === "/portfolio") ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className={(activePage === "/about") ? "nav-link active" : "nav-link"} to="/about">About</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
