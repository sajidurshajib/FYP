import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDatabase, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import './Register.css';

class Register extends Component {
    render(){
        return(
            <div className="Register">
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        
                        <Col md="4">
                            <div className="registerLeft">
                                <h2><Link to='/'>Data<FontAwesomeIcon icon={faDatabase} />Vila.com</Link></h2>
                                <Link to="/home"><FontAwesomeIcon icon={faArrowLeft} /> Return to Home</Link>
                                <br/>
                                <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
                            </div>
                        </Col>
                        
                        <Col md="4">
                            <div className="registerRight">
                                <Form>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Your email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Choose Username</Form.Label>
                                        <Form.Control type="email" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="password" />
                                    </Form.Group>


                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>

                                </Form> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
