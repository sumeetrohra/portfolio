import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { FaMediumM, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { instagramLink, emailLink, mediumLink, linkedinLink, githubLink } from '../URLs';

const Footer = (props) => {
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
                    <div className="vl"></div>
                    <Button
                        className="footer-hover-effect play-button"
                        variant="light"
                        onClick={() => props.history.push('/play')}
                    >
                        Let's Play
                    </Button>
                </Nav>
            </Navbar>
        </Navbar >
    );
}
export default withRouter(Footer);
