import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaFilePdf, FaYoutube } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';

import { PageLinks } from './pages/PageLinks';
import { youtubeUrl, npmUrl } from './URLs';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = ({
  data,
  history,
  expanded,
  toggleExpanded,
  closeExpanded,
}) => {
  const resumeUrl = data ? data.resumeUrl : null;

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
        {PageLinks.map((PageLink) => {
          return (
            <NavItem
              key={PageLink.link}
              eventKey={PageLink.link}
              className="nav-item"
              onClick={() => history.push(PageLink.link)}
            >
              <NavIcon>
                <PageLink.icon style={iconStyle} />
              </NavIcon>
              <NavText style={textStyle}>{PageLink.name}</NavText>
            </NavItem>
          );
        })}
        <NavItem className="nav-item" onClick={() => window.open(resumeUrl)}>
          <NavIcon>
            <FaFilePdf style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>Resume</NavText>
        </NavItem>
        <NavItem className="nav-item" onClick={() => window.open(youtubeUrl)}>
          <NavIcon>
            <FaYoutube style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>YouTube</NavText>
        </NavItem>
        <NavItem className="nav-item" onClick={() => window.open(npmUrl)}>
          <NavIcon>
            <DiNpm style={iconStyle} />
          </NavIcon>
          <NavText style={textStyle}>NPM</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

const styles = {
  iconStyle: {
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.75em',
  },
  textStyle: {
    cursor: 'pointer',
    color: 'white',
    fontSize: '20px',
  },
  sideNavStyle: {
    position: 'fixed',
    background: '#212529',
    borderRight: '1px solid black',
  },
};

const mapStateToProps = ({ data }) => {
  return { data };
};

export default connect(mapStateToProps, null)(withRouter(SideBar));
