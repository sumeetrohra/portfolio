/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';

const Projects = ({ projects, closeExpanded, style }) => {
    return <Cards closeExpanded={closeExpanded} data={projects || []} name="Projects." style={style} />;
}

const mapStateToProps = ({ data }) => {
    const { projects } = data;
    return { projects };
}

export default connect(mapStateToProps, null)(Projects);
