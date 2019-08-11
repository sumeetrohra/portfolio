import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome } from 'react-icons/fa';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = (props) => {
    return (
        <SideNav
            style={{
                position: "fixed",
                background: "#222",
                borderRight: "1px solid black"
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FaHome style={{ cursor: "pointer", color: "white", fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText style={{ cursor: "pointer", color: "white", fontSize: "20px" }}>
                        Home
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;
