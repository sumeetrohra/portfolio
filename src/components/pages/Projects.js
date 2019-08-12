import React from 'react';
import Cards from '../Cards';

const data = [
    {
        url: 'https://snake-game-pesto.netlify.com',
        image: 'https://drive.google.com/uc?id=1qafEojPuqvoG0O41lom1o07BnAyRwXgD',
        title: 'Snake game.',
        text: 'Snake game made in React with Semantic UI and Firebase.',
    },
    {
        url: 'https://github.com/sumeetrohra/crim',
        image: 'https://drive.google.com/uc?id=1d6-uCNUdKF3HLgv1vlEGzjef-W3Z_1xr',
        title: 'Crim.',
        text: 'A Face Recongnition app for Criminal detection made with React Native, Firebase and Azure Conginitive Api.',
    },
    {
        url: 'https://github.com/sumeetrohra/manager',
        image: 'https://drive.google.com/uc?id=1b7D9c4VaYUOlAS6l9e0WuwMMkXPALnH_',
        title: 'Manager.',
        text: 'Employee manager made using React Native and Firebase.',
    },
    {
        url: 'https://github.com/sumeetrohra/pwd_manager',
        image: 'https://drive.google.com/uc?id=1b7D9c4VaYUOlAS6l9e0WuwMMkXPALnH_',
        title: 'Password Manager.',
        text: 'Password Manager made using React Native and Firebase.',
    },
];

const Projects = () => {
    return <Cards data={data} name="Projects." />;
}

export default Projects;
