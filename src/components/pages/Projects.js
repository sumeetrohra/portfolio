import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';

const Projects = (props) => {
    return <Cards data={props.projects} name="Projects." />;
}

const mapStateToProps = ({ data }) => {
    const { projects } = data;
    return { projects };
}

export default connect(mapStateToProps, null)(Projects);
