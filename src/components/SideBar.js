import React from 'react';
import { withRouter } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaBloggerB, FaFileCode, FaSlideshare } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = (props) => {
    console.log(props);
    const { iconStyle, textStyle, sideNavStyle } = styles;
    return (
        <SideNav
            style={sideNavStyle}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home" className="nav-item" onClick={() => props.history.push('/')}>
                    <NavIcon>
                        <FaHome style={iconStyle} />
                    </NavIcon>
                    <NavText style={textStyle}>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="projects" className="nav-item" onClick={() => props.history.push('/projects')}>
                    <NavIcon>
                        <GoGitBranch style={iconStyle} />
                    </NavIcon>
                    <NavText style={textStyle}>
                        Projects
                    </NavText>
                </NavItem>
                <NavItem eventKey="skills" className="nav-item" onClick={() => props.history.push('/skills')}>
                    <NavIcon>
                        <FaFileCode style={iconStyle} />
                    </NavIcon>
                    <NavText style={textStyle}>
                        Skills
                    </NavText>
                </NavItem>
                <NavItem eventKey="blogs" className="nav-item" onClick={() => props.history.push('/blogs')}>
                    <NavIcon>
                        <FaBloggerB style={iconStyle} />
                    </NavIcon>
                    <NavText style={textStyle}>
                        Blogs
                    </NavText>
                </NavItem>
                <NavItem eventKey="talks" className="nav-item" onClick={() => props.history.push('/talks')}>
                    <NavIcon>
                        <FaSlideshare style={iconStyle} />
                    </NavIcon>
                    <NavText style={textStyle}>
                        Talks
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
        background: "#222",
        borderRight: "1px solid black",
    },
}

export default withRouter(SideBar);
