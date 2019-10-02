import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ data, toggleExpanded, expanded, closeExpanded }) {
  const url = data ? data.resumeUrl : 'not available';

  const pageLinks = [
    'projects',
    'skills',
    'blogs',
    'talks'
  ];

  const capitalize = (string) => {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
  }

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        justifyContent: 'space-between',
        backgroundColor: '#212529',
      }}
      expanded={expanded}
      onToggle={toggleExpanded}
    >
      <Navbar.Brand as={Link} to="/" onClick={closeExpanded}>Sumeet Rohra</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          {pageLinks.map(pageLink => (

            <Nav.Link as={Link} to={`/${pageLink}`} onClick={closeExpanded}>{capitalize(pageLink)}</Nav.Link>

          ))}
          <Nav.Link as={Link}
            onClick={() => {
              window.open(url);
              closeExpanded();
            }}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ data }) => {
  return { data };
};

export default connect(mapStateToProps, null)(Header);
