import React from 'react';
import Typist from 'react-typist';

const Home = () => {
    return (
        <div className="main">
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
                <img src="https://drive.google.com/uc?id=1d1NOe3c5fS8okka1lkSqX9HlAPY_KAFM" alt="Me" className="my-image" />
            </div>
        </div>
    );
}

export default Home;
