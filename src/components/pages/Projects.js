/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';
import { changeHeaderText } from '../../actions';

const Projects = ({ changeHeaderText, projects }) => {
    useEffect(() => {
        changeHeaderText('Projects');
    }, []);

    return <Cards data={projects || []} name="Projects." />;
}

const mapStateToProps = ({ data }) => {
    const { projects } = data;
    return { projects };
}

export default connect(mapStateToProps, { changeHeaderText })(Projects);
