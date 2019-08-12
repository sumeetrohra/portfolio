import React from 'react';
import Cards from '../Cards';

const data = [
    {
        url: 'https://drive.google.com/open?id=1tHKnvHrHnvdnyA7U9jCsevC6rzvAdAGr',
        image: 'https://drive.google.com/uc?id=1oMCjuGF6sp1YTikl3pBXZsZR_EQQTsZn',
        title: 'Future of Jobs',
        text: 'What will jobs look like in 2020...',
    },
    {
        url: 'https://drive.google.com/open?id=1vG5LXqR-CbyOgBoEPUYTR9vUVUMqg1ZN80IOLmKTPGw',
        image: 'https://drive.google.com/uc?id=1QV41R-UV1BKUcqiFzXYxtH_WhpEWeK9Y',
        title: 'Blockchain, Bitcoin, Ethereum and more...',
        text: 'Meetup on Blockchain and its implications.',
    },
    {
        url: 'https://medium.com/altcoin-magazine/what-is-bitcoin-ede108d2ea9e',
        image: 'https://drive.google.com/uc?id=1VocI7qeek3_aqPZxPtJH0IzqdU_Jq8nw',
        title: 'What is Blockchain?',
        text: 'Seminar on Blockchain.',
    },
];

const Talks = () => {
    return <Cards data={data} name="Talks." />;
}

export default Talks;
