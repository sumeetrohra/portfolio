/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Typist from 'react-typist';

import { profileImage, youtubeUrl } from '../URLs';
import { FaYoutube } from 'react-icons/fa';

const Home = ({ closeExpanded }) => {
    return (
        <div className="main default" onClick={closeExpanded} style={{ marginTop: '120px' }}>
            <div className="main-name">
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={2000} />
                    <h1>HI,</h1>
                    <h1>I'M</h1>
                    <h1>SUMEET ROHRA</h1>
                    <h5>NOT YOUR AVERAGE SOFTWARE ENGINEER...</h5>
                    <button
                        style={{
                            border: 'none',
                            backgroundColor: '#b80d0d',
                            color: '#fff',
                            fontSize: '20px',
                            padding: '8px 15px',
                            marginTop: '8px',
                            borderRadius: '5px',
                        }}
                        onClick={() => window.open(youtubeUrl)}
                    >
                        <FaYoutube
                            className="bigger-icon"
                            style={{ paddingBottom: '3px' }}
                        />
                        {'  '}Watch me on YouTube
                </button>
                </Typist>
            </div>
            <div className="display-image">
                <img src={profileImage} rel="preload" alt="Me" className="my-image" />
            </div>
        </div>
    );
}

export default Home;
