import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaBloggerB, FaFileCode, FaSlideshare, FaFilePdf } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

const styles = {
  pStyle: {
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
    paddingLeft: '40px',
  },
  iStyle: {
    cursor: "pointer",
    color: "white",
    fontSize: '1.75em',
    float: 'left',
  }
}

function Header({ data, toggleExpanded, expanded, closeExpanded }) {
  const url = data ? data.resumeUrl : 'not available';

  const { pStyle, iStyle } = styles;

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
          <Nav.Link
            as={Link}
            to={`/projects`}
            onClick={closeExpanded}
          >
            <GoGitBranch style={iStyle} />
            <p style={pStyle}>Projects</p>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={`/skills`}
            onClick={closeExpanded}
          >
            <FaFileCode style={iStyle} />
            <p style={pStyle}>Skills</p>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={`/blogs`}
            onClick={closeExpanded}
          >
            <FaBloggerB style={iStyle} />
            <p style={pStyle}>BLogs</p>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={`/talks`}
            onClick={closeExpanded}
          >
            <FaSlideshare style={iStyle} />
            <p style={pStyle}>Talks</p>
          </Nav.Link>
          <Nav.Link as={Link}
            onClick={() => {
              window.open(url);
              closeExpanded();
            }}
          >
            <FaFilePdf style={iStyle} />
            <p style={pStyle}>Resume</p>
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
