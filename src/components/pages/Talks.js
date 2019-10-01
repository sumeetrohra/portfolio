/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cards from '../Cards';
import { changeHeaderText } from '../../actions';

const Talks = ({ changeHeaderText, talks }) => {
    useEffect(() => {
        changeHeaderText('Talks');
    }, []);

    return <Cards data={talks || []} name="Talks." />;
}

const mapStateToProps = ({ data }) => {
    const { talks } = data;
    return { talks };
}

export default connect(mapStateToProps, { changeHeaderText })(Talks);
