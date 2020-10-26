import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faProjectDiagram, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

let Service = ()=>{
    return(
        <div className="Service">
            <Container>
                <h1>Serivce</h1>
                <span className="hspan"></span>
                <div className="serviceDiv">
                    <Row>
                        <Col md={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faDatabase}/>
                                <h2>Buid dataset</h2>
                                <p>orem ipsum dolor sit ametLorem Ipsum is simply dummy text of the printing and typesetting industry bla bla.</p>
                                <button className="commonBtn">read more</button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="singleService">
                            <FontAwesomeIcon icon={faProjectDiagram}/>
                                <h2>Develop model</h2>
                                <p>orem ipsum dolor sit ametLorem Ipsum is simply dummy text of the printing and typesetting lorem ipsum industry bla bla.</p>
                                <button className="commonBtn">read more</button>
                            </div>
                        </Col>
                        
                        <Col md={4}>
                            <div className="singleService">
                            <FontAwesomeIcon icon={faHandsHelping}/>
                                <h2>Help others</h2>
                                <p>orem ipsum dolor sit ametLorem Ipsum lorem ipsum dolor is simply dummy text of the printing and typesetting industry .</p>
                                <button className="commonBtn">read more</button>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Service;