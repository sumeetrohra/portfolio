import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { FaMediumM, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { DiNpm } from 'react-icons/di';

import {
  instagramLink,
  emailLink,
  mediumLink,
  linkedinLink,
  githubLink,
  youtubeUrl,
  npmUrl,
} from './URLs';

const Footer = ({ closeExpanded }) => {
  const footerLinks = [
    {
      link: emailLink,
      icon: <FiMail className="bigger-icon" />,
    },
    {
      link: instagramLink,
      icon: <FaInstagram className="bigger-icon" />,
    },
    {
      link: mediumLink,
      icon: <FaMediumM className="bigger-icon" />,
    },
    {
      link: linkedinLink,
      icon: <FaLinkedin className="bigger-icon" />,
    },
    {
      link: githubLink,
      icon: <GoMarkGithub className="bigger-icon" />,
    },
    {
      link: youtubeUrl,
      icon: <FaYoutube className="bigger-icon" />,
    },
    {
      link: npmUrl,
      icon: <DiNpm className="bigger-icon" />,
    },
  ];

  return (
    <Navbar expand="lg" fixed="bottom" className="bg-dark">
      <Navbar id="responsive-nav-bar">
        <Nav>
          {footerLinks.map((obj) => (
            <Nav.Link
              key={obj['link']}
              className="footer-hover-effect"
              onClick={() => {
                window.open(obj['link']);
                closeExpanded();
              }}
            >
              {obj['icon']}
            </Nav.Link>
          ))}
          <div className="vl"></div>
          <Button
            style={{ borderRadius: '5px' }}
            as={Link}
            className="footer-hover-effect play-button"
            variant="light"
            to="/play"
            onClick={closeExpanded}
          >
            Let's Play
          </Button>
        </Nav>
      </Navbar>
    </Navbar>
  );
};
export default Footer;
