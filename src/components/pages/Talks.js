import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';

const Talks = (props) => {
    return <Cards data={props.talks} name="Talks." />;
}

const mapStateToProps = ({ data }) => {
    const { talks } = data;
    return { talks };
}

export default connect(mapStateToProps, null)(Talks);
