/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Typist from 'react-typist';

import { profileImage, youtubeUrl, npmUrl } from '../URLs';
import { FaYoutube } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';

const Home = ({ closeExpanded }) => {
  return (
    <div
      className="main default"
      onClick={closeExpanded}
      style={{ marginTop: '120px' }}
    >
      <Typist cursor={{ show: false }}>
        <Typist.Delay ms={2000} />
        <div className="main-name">
          <h1>HI,</h1>
          <h1>I'M</h1>
          <h1>SUMEET ROHRA</h1>
          <h5>NOT YOUR AVERAGE SOFTWARE ENGINEER...</h5>
          <button
            style={{
              border: 'none',
              backgroundColor: '#212529',
              color: '#fff',
              fontSize: '20px',
              padding: '8px 15px',
              marginTop: '8px',
              borderRadius: '5px',
              marginRight: '15px',
            }}
            onClick={() => window.open(npmUrl)}
          >
            <DiNpm className="bigger-icon" style={{ paddingBottom: '3px' }} />
            {'  '}Check out my packages
          </button>
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
        </div>
      </Typist>
      <div className="display-image">
        <img src={profileImage} rel="preload" alt="Me" className="my-image" />
      </div>
    </div>
  );
};

export default Home;
