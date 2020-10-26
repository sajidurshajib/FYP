import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

let About = ()=>{
    return(
        <div className="About">
            <Container>
                <Row>
                    <Col md={2}>
                    </Col>

                    <Col md={8}>
                        <h1>About us</h1>
                        <span className="hspan"></span>
                        <p>Datavila is data sharing platform where you built own dataset.<br/>Lorem ipsum dolor sit ametLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>

                        <button className="commonBtn">Show more <FontAwesomeIcon icon={faArrowCircleDown}/></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;