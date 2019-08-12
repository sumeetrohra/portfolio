import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// html, css, js, react, redux, firebase, node, express, mongo, sql, github, bootstrap, python
import html5svg from '../svg/html5svg.svg';
import css3svg from '../svg/css3svg.svg';
import reduxsvg from '../svg/reduxsvg.svg';
import reactsvg from '../svg/reactsvg.svg';
import jssvg from '../svg/jssvg.svg';
import firebasesvg from '../svg/firebasesvg.svg';
import nodejssvg from '../svg/nodejssvg.svg';
import expressjssvg from '../svg/expressjssvg.svg';
import mongodbsvg from '../svg/mongodbsvg.svg';
import postgresqlsvg from '../svg/postgresqlsvg.svg'
import githubsvg from '../svg/githubsvg.svg';
import pythonsvg from '../svg/pythonsvg.svg';
import flasksvg from '../svg/flasksvg.svg';
import bootstrapsvg from '../svg/bootstrapsvg.svg';
import semanticuisvg from '../svg/semanticuisvg.svg';

const SvgImage = (props) => {
    return (
        <Col xs={6} sm={4} md={2} style={{ padding: "20px" }}>
            <Image className="hover-color" src={props.image} rounded width="100px" height="100px" />
        </Col>
    );
}


const Skills = () => {
    return (
        <>
            <h1 className="default">Skills</h1>
            <Container>
                <Row style={{ paddingLeft: "60px", paddingBottom: "60px" }}>
                    <SvgImage image={html5svg} />
                    <SvgImage image={css3svg} />
                    <SvgImage image={bootstrapsvg} />
                    <SvgImage image={semanticuisvg} />
                    <SvgImage image={jssvg} />
                    <SvgImage image={reactsvg} />
                    <SvgImage image={reduxsvg} />
                    <SvgImage image={firebasesvg} />
                    <SvgImage image={nodejssvg} />
                    <SvgImage image={expressjssvg} />
                    <SvgImage image={mongodbsvg} />
                    <SvgImage image={postgresqlsvg} />
                    <SvgImage image={githubsvg} />
                    <SvgImage image={pythonsvg} />
                    <SvgImage image={flasksvg} />
                </Row>
            </Container>
        </>
    )
}

export default Skills;
