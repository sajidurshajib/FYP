import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDatabase} from '@fortawesome/free-solid-svg-icons';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <div className="Login">
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        
                        <Col md="4">
                            <div className="loginLeft">
                                <h2><Link to='/'>Data<FontAwesomeIcon icon={faDatabase} />Vila.com</Link></h2>
                                <Link to="/home"><FontAwesomeIcon icon={faArrowLeft} /> Back to home</Link>
                            </div>
                        </Col>
                        
                        <Col md="4">
                            <div className="loginRight">
                                <Form>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email or Username</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter email" />
                                    </Form.Group>

                                    <p><Link to="/register">Register</Link><span className="rightSpan"><Link>Forgot password?</Link></span></p>

                                    <Button variant="primary" type="submit">
                                        Login
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

export default Login;
