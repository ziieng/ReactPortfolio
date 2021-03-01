import React, { useEffect, useState } from "react";
import { FaGithub, FaFileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";

function TopNav() {
  const location = useLocation()
  const [activePage, setActivePage] = useState("")

  useEffect(() => {
    setActivePage(location.pathname)
  }, [location.pathname, activePage])

  return (
    <Navbar variant="dark" className="d-flex justify-content-between" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Zii Engelhardt
      </Navbar.Brand>
      {/* Establish hamburger for narrow screens */}
      <Navbar.Toggle aria-controls="CollapsedNav" />
      {/* Navigation here down collapses on narrower screens */}
      <Navbar.Collapse className="ml-5 " id="CollapsedNav">
        <Nav className="mt-2 mt-lg-0 mx-auto h4">
          <Nav.Item>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="mailto:ziiengelhardt@gmail.com" aria-label="Email">
              < FaEnvelope />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/ziieng" aria-label="GitHub">
              < FaGithub />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziieng/"
              aria-label="LinkedIn">
              <FaLinkedin />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1PLFvmRkLbO74XjR9L6c9dn1vp06lsfV9-lXtM_DrgCk/export?format=pdf" aria-label="Resume">
              <FaFileAlt />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="mt-2 mt-lg-0">
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
