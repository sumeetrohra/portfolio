/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';
const Blogs = ({ blogs, closeExpanded, style }) => {
    return <Cards closeExpanded={closeExpanded} data={blogs || []} name="Blogs." style={style} />
}

const mapStateToProps = ({ data }) => {
    const { blogs } = data;
    return { blogs };
}

export default connect(mapStateToProps, null)(Blogs);
