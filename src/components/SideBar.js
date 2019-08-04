import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome } from 'react-icons/fa';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBar = (props) => {
    const { onChange } = props;
    return (
        <SideNav
            style={{ position: "fixed" }}
            onToggle={(expanded) => {
                expanded ? onChange("240px") : onChange("64px");
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FaHome style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
            </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;
