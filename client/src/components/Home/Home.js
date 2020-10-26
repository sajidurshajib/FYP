import React, { Component } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu.js';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Menu/>
                <div className="homeTop">
                    <Container>
                        <Row>
                            <Col md="2"></Col>
                            <Col md="8">
                                <h2><FontAwesomeIcon icon={faHome}/> Home</h2>
                                <p>For better analysis, Need Data? <br/>Search whatever you want...</p>
                                
                                <Form className="searchForm">
                                    
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Search..." />
                                    </Form.Group>
                                    
                                    <div className="searchCheckbox d-flex justify-content-center">
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Top" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Primium" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Public" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Site" />
                                        </Form.Group>

                                    </div> 
                                                                       
                                </Form> 

                            </Col>
                        </Row>
                    </Container>
                </div>   
            </div>
        );
    }
}

export default Home;