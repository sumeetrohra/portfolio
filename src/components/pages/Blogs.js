/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';
import { changeHeaderText } from '../../actions';

const Blogs = ({ blogs, changeHeaderText }) => {
    useEffect(() => {
        changeHeaderText('Blogs');
    }, []);

    return <Cards data={blogs || []} name="Blogs." />
}

const mapStateToProps = ({ data }) => {
    const { blogs } = data;
    return { blogs };
}

export default connect(mapStateToProps, { changeHeaderText })(Blogs);
