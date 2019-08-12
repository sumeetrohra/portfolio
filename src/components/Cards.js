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
        minHeight: "350px",
        maxHeight: "500px"
    },
};

const Cards = (props) => {
    console.log(props);
    return (
        <div className="default" >
            <h1 style={cardStyle.h1}>{props.name}</h1>
            <CardColumns id="my-card-columns" style={cardStyle.cardColumnStyle}>
                {
                    props.data.map(element => (
                        <Card key={element.url} id="my-card" style={cardStyle.cardStyle} onClick={() => window.open(element.url)} >
                            <Card.Img variant="top" src={element.image} style={cardStyle.cardImageStyle} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    {element.text}
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
