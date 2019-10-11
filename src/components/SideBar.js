import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaBloggerB, FaFileCode, FaSlideshare, FaFilePdf } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = ({ data, history, expanded, toggleExpanded, closeExpanded }) => {
  const url = data ? data.resumeUrl : 'not available';
  const { iconStyle, textStyle, sideNavStyle } = styles;
  return (
    <SideNav
      style={sideNavStyle}
      expanded={expanded}
      onToggle={toggleExpanded}
      onSelect={closeExpanded}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" className="nav-item" onClick={() => history.push('/')}>
          <NavIcon>
            <FaHome style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Home
                    </NavText>
        </NavItem>
        <NavItem eventKey="projects" className="nav-item" onClick={() => history.push('/projects')}>
          <NavIcon>
            <GoGitBranch style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Projects
                    </NavText>
        </NavItem>
        <NavItem eventKey="skills" className="nav-item" onClick={() => history.push('/skills')}>
          <NavIcon>
            <FaFileCode style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Skills
                    </NavText>
        </NavItem>
        <NavItem eventKey="blogs" className="nav-item" onClick={() => history.push('/blogs')}>
          <NavIcon>
            <FaBloggerB style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Blogs
                    </NavText>
        </NavItem>
        <NavItem eventKey="talks" className="nav-item" onClick={() => history.push('/talks')}>
          <NavIcon>
            <FaSlideshare style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Talks
                    </NavText>
        </NavItem>
        <NavItem className="nav-item" onClick={() => window.open(url)}>
          <NavIcon>
            <FaFilePdf style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>
            Resume
                    </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

const styles = {
  iconStyle: {
    cursor: "pointer",
    color: "white",
    fontSize: '1.75em',
  },
  textStyle: {
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
  },
  sideNavStyle: {
    position: "fixed",
    background: "#212529",
    borderRight: "1px solid black",
  },
}

const mapStateToProps = ({ data }) => {
  return { data };
};

export default connect(mapStateToProps, null)(withRouter(SideBar));