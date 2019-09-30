import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

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
            <Image data-tip={props.name} className="hover-color" src={props.image} rounded width="100px" height="100px" />
            <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Col>
    );
}


const Skills = () => {
    return (
        <>
            <h1 className="default">Skills.</h1>
            <Container>
                <Row style={{ paddingLeft: "60px", paddingBottom: "60px" }}>
                    <SvgImage image={html5svg} name="HTML 5" />
                    <SvgImage image={css3svg} name="CSS 3" />
                    <SvgImage image={bootstrapsvg} name="Bootstrap" />
                    <SvgImage image={semanticuisvg} name="Semantic UI" />
                    <SvgImage image={jssvg} name="JavaScript" />
                    <SvgImage image={reactsvg} name="React / React Native" />
                    <SvgImage image={reduxsvg} name="Redux" />
                    <SvgImage image={firebasesvg} name="Firebase" />
                    <SvgImage image={nodejssvg} name="NodeJs" />
                    <SvgImage image={expressjssvg} name="ExpressJs" />
                    <SvgImage image={mongodbsvg} name="MongoDB" />
                    <SvgImage image={postgresqlsvg} name="PostgreSQL" />
                    <SvgImage image={githubsvg} name="Git / Github" />
                    <SvgImage image={pythonsvg} name="Python" />
                    <SvgImage image={flasksvg} name="Python Flask" />
                </Row>
            </Container>
        </>
    )
}

export default Skills;
