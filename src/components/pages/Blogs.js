import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const cardStyle = {
    h1: {
        paddingBottom: "100px",
    },
    cardColumnStyle: {
        display: "flex",
        alignItems: "space-around",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingBottom: "100px",
    },
    cardStyle: {
        borderRadius: "5px",
        cursor: "pointer",
        width: "40%",
    },
    cardImageStyle: {
        minHeight: "350px",
    },
};

const Blogs = () => {
    return (
        <div className="default" >
            <h1 style={cardStyle.h1}>Blogs</h1>
            <CardColumns id="my-card-columns" style={cardStyle.cardColumnStyle}>
                <Card id="my-card" style={cardStyle.cardStyle} onClick={() => window.open('https://medium.com/altcoin-magazine/what-is-bitcoin-d3f2a34416ed')} >
                    <Card.Img variant="top" src="https://miro.medium.com/max/529/1*zQxHH44g9LPH5qNpvt04OQ.png" style={cardStyle.cardImageStyle} />
                    <Card.Body>
                        <Card.Title>What is Bitcoin?</Card.Title>
                        <Card.Text>
                            Part 1.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="my-card" style={cardStyle.cardStyle} onClick={() => window.open('https://medium.com/altcoin-magazine/what-is-bitcoin-ede108d2ea9e')} >
                    <Card.Img variant="top" src="https://miro.medium.com/max/875/1*yUtD_E_z7etVgUH8bysy8Q.png" style={cardStyle.cardImageStyle} />
                    <Card.Body>
                        <Card.Title>What is Bitcoin?</Card.Title>
                        <Card.Text>
                            Part 2.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    )
}

export default Blogs;
