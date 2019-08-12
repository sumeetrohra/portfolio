import React from 'react';
import Cards from '../Cards';

const data = [
    {
        url: 'https://medium.com/altcoin-magazine/what-is-bitcoin-d3f2a34416ed',
        image: 'https://miro.medium.com/max/529/1*zQxHH44g9LPH5qNpvt04OQ.png',
        title: 'What is Bitcoin?',
        text: 'Part 1.',
    },
    {
        url: 'https://medium.com/altcoin-magazine/what-is-bitcoin-ede108d2ea9e',
        image: 'https://miro.medium.com/max/875/1*yUtD_E_z7etVgUH8bysy8Q.png',
        title: 'What is Bitcoin?',
        text: 'Part 2.',
    },
];

const Blogs = () => {
    return <Cards data={data} name="Blogs." />
}

export default Blogs;
