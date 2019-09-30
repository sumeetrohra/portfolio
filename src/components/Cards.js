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
        marginBottom: "40px",
    },
    cardImageStyle: {
        height: "400px",
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        borderTop: '1px solid rgba(0, 0, 0, .125)',
        borderRadius: '5px',
    },
    cardTitleStyle: {
        padding: '10px',
        textAlign: 'center',
        margin: 0,
    },
};

const Cards = (props) => {
    return (
        <div className="default" >
            <h1 style={cardStyle.h1}>{props.name}</h1>
            <CardColumns id="my-card-columns" style={cardStyle.cardColumnStyle}>
                {
                    props.data.map(element => (
                        <Card key={element.url} id="my-card" style={cardStyle.cardStyle} onClick={() => window.open(element.url)} >
                            <Card.Title style={cardStyle.cardTitleStyle}><h3>{element.title}</h3></Card.Title>
                            <Card.Img variant="top" src={element.image} style={cardStyle.cardImageStyle} />
                            <Card.Body>
                                <Card.Text>
                                    <h6>{element.text}</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </CardColumns>
        </div>
    );
}

export default Cards;
