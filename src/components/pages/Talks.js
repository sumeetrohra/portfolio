/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';

const Talks = ({ talks, closeExpanded, style }) => {
    return <Cards closeExpanded={closeExpanded} data={talks || []} name="Talks." style={style} />;
}

const mapStateToProps = ({ data }) => {
    const { talks } = data;
    return { talks };
}

export default connect(mapStateToProps, null)(Talks);
