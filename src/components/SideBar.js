import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaFilePdf } from 'react-icons/fa';

import { PageLinks } from './pages/PageLinks';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = ({ data, history, expanded, toggleExpanded, closeExpanded }) => {
  const url = data ? data.resumeUrl : 'not available';
  const { iconStyle, textStyle, sideNavStyle } = styles;
  console.log(PageLinks);
  return (
    <SideNav
      style={sideNavStyle}
      expanded={expanded}
      onToggle={toggleExpanded}
      onSelect={closeExpanded}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        {
          PageLinks.map(PageLink => {
            return (
              <NavItem eventKey={PageLink.link} className="nav-item" onClick={() => history.push(PageLink.link)}>
                <NavIcon>
                  <PageLink.icon style={iconStyle} />
                </NavIcon>
                <NavText style={textStyle}>
                  {PageLink.name}
                </NavText>
              </NavItem>
            );
          })
        }
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