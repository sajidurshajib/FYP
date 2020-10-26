import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGithub} from '@fortawesome/fontawesome-free-brands';
import { Link } from 'react-router-dom';
import './Footer.css';

let Footer = ()=>{
    return(
        <div className="Footer">
            <Container>
                <Row>
                    <Col md="4">
                        <h3>DataVila</h3>
                        <Link to=""><FontAwesomeIcon icon={faDatabase}/> Our Forum</Link>
                        <Link to=""><FontAwesomeIcon icon={faFacebook}/> Facebook page</Link>
                        <Link to=""><FontAwesomeIcon icon={faTwitter}/> Twitter</Link>
                        <Link to=""><FontAwesomeIcon icon={faGithub}/> Github</Link>
                       
                        <br/>
                        <h3>Our forum</h3>
                        <b><Link to="">DataVila/Forum</Link></b>
                        <p>Discuss about data with huge community.<br/> Get idea and share idea...</p>
                    </Col>
                    <Col md="4">
                        <h3>Contact us</h3>
                        <p>inbox@datavila.com<br/>Narayanganj, Bnagladesh.<br/>01817584058</p>
                        <p>sajidur.inbox@gmail.com<br/>Narayanganj, Bnagladesh.<br/>01817584058</p>
                        <p>khairul.inbox@gmail.com<br/>Bali, Indonesia.<br/>01817584058</p>
                    </Col>
                    <Col md="4">
                        <h3>Quick mail</h3>
                        <Form>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="5" placeholder="Your message..."/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>                      
                    </Col>
                </Row>
                <div className="bottomFooter">
                    <p>Developed by <a href="https://github.com/sajaidurshajib">Sajidur Rahman</a></p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;