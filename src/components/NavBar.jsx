import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from "react-bootstrap-icons";
import photo from "../assets/img/photo.jpg"

 export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img id='photo' src={photo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projets
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alex-scornavacca-604286264/">
                <img src={navIcon1} alt="" />{" "}
              </a>
              <a href="https://www.facebook.com/alex.scornavacca">
                <img src={navIcon2} alt="" />{" "}
              </a>
              <a href="https://www.instagram.com/alex.scornavacca6/?hl=es">
                <img src={navIcon3} alt="" />{" "}
              </a>
            </div>
            <button className='vvd' onClick={()=>{console.log("Connect")}}> <a href='https://wa.me/3467419852?text=Hola!%20He%20visto%20tu%20perfil%20y%20me%20ha%20interesado.' target={"_BLANK"}>Send WhatsApp</a></button>
            </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


