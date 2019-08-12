import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';

const Blogs = (props) => {
    return <Cards data={props.blogs} name="Blogs." />
}

const mapStateToProps = ({ data }) => {
    const { blogs } = data;
    return { blogs };
}

export default connect(mapStateToProps, null)(Blogs);
