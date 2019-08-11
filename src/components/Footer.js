import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { FaMediumM, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const emailLink = "mailto: sumeetrohra1@gmail.com";
    const instagramLink = "https://www.instagram.com/sumeet_r0hra/";
    const mediumLink = "https://medium.com/@rohrasumeet";
    const linkedinLink = "https://www.linkedin.com/in/sumeetrohra/";
    const githubLink = "https://github.com/sumeetrohra";
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom" >
            <Navbar.Brand className="hide-lessthan-400">Contact</Navbar.Brand>
            <Navbar id="responsive-nav-bar">
                <Nav>
                    <Nav.Link className="footer-hover-effect" href={emailLink}><FiMail className="bigger-icon" /></Nav.Link>
                    <Nav.Link className="footer-hover-effect" onClick={() => window.open(instagramLink)}><FaInstagram className="bigger-icon" /></Nav.Link>
                    <Nav.Link className="footer-hover-effect" onClick={() => window.open(mediumLink)}><FaMediumM className="bigger-icon" /></Nav.Link>
                    <Nav.Link className="footer-hover-effect" onClick={() => window.open(linkedinLink)}><FaLinkedin className="bigger-icon" /></Nav.Link>
                    <Nav.Link className="footer-hover-effect" onClick={() => window.open(githubLink)}><GoMarkGithub className="bigger-icon" /></Nav.Link>
                    <Button
                        className="footer-hover-effect pulse"
                        variant="light"
                        style={{
                            fontSize: "16px",
                            fontWeight: 800,
                            margin: "5px",
                            borderRadius: "0px",
                        }}>
                        Let's Play
                    </Button>
                </Nav>
            </Navbar>
        </Navbar >
    );
}
export default Footer;
