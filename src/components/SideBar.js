/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { withRouter } from 'react-router-dom';

import { FaHome, FaBloggerB, FaFileCode, FaSlideshare, FaFilePdf } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

const SideBar = (props) => {
    const { history, data } = props;
    const url = data ? data.resumeUrl : 'not available';
    const { iconStyle, textStyle } = styles;

    return (
        <Menu {...props}>
            <a className="menu-item nav-item" onClick={() => history.push('/')}>
                <FaHome style={iconStyle} />
                <h3 style={textStyle}>Home</h3>
            </a>

            <a className="menu-item nav-item"
                // onClick={() => history.push('/projects')}
                href="/projects"
            >
                <GoGitBranch style={iconStyle} />
                <h3 style={textStyle}>Projects</h3>
            </a>

            <a className="menu-item nav-item" onClick={() => history.push('/skills')}>
                <FaFileCode style={iconStyle} />
                <h3 style={textStyle}>Skills</h3>
            </a>

            <a className="menu-item nav-item" onClick={() => history.push('/blogs')}>
                <FaBloggerB style={iconStyle} />
                <h3 style={textStyle}>Blogs</h3>
            </a>

            <a className="menu-item nav-item" onClick={() => history.push('/talks')}>
                <FaSlideshare style={iconStyle} />
                <h3 style={textStyle}>Talks</h3>
            </a>

            <a className="menu-item nav-item" onClick={() => window.open(url)}>
                <FaFilePdf style={iconStyle} />
                <h3 style={textStyle}>Resume</h3>
            </a>
        </Menu>
    );
}

const styles = {
    iconStyle: {
        cursor: "pointer",
        color: "white",
        fontSize: '1.75em',
        display: 'inline-block',
    },
    textStyle: {
        display: 'inline-block',
        paddingLeft: '10px',
        margin: 0,
    },
}

const mapStateToProps = ({ data }) => {
    return { data };
};

export default connect(mapStateToProps, null)(withRouter(SideBar));
