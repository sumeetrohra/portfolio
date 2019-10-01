/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { connect } from 'react-redux';

import { profileImage } from '../URLs';
import { changeHeaderText } from '../../actions';

const Home = ({ changeHeaderText }) => {
    useEffect(() => {
        changeHeaderText('Sumeet Rohra');
    }, []);

    return (
        <div className="main default">
            <div className="main-name">
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={2000} />
                    <h1>HI,</h1>
                    <h1>I'M</h1>
                    <h1>SUMEET ROHRA</h1>
                    <h5>NOT YOUR AVERAGE SOFTWARE ENGINEER...</h5>
                </Typist>
            </div>
            <div className="display-image">
                <img src={profileImage} rel="preload" alt="Me" className="my-image" />
            </div>
        </div>
    );
}

export default connect(null, { changeHeaderText })(Home);
