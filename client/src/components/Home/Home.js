import React, { Component} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu.js';
import './Home.css';
import JSONDATA from "./MOCK_DATA.json"

class Home extends Component{

    state={
        search:''
    }

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
                                    
                                    {/* <div className="searchCheckbox d-flex justify-content-center">
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

                                    </div>  */}
                                                                       
                                </Form> 

                            </Col>
                        </Row>
                    </Container>
                </div>   
                <div className="homeData">
                    <Container>
                        {JSONDATA.map((val, key)=>{
                            return(
                                <div className="everyResult" key={key}>
                                    <Row>
                                        <Col md="2"></Col>
                                        <Col md="8">
                                            <div className="everyWrapper">
                                                <h3><a href="#">{val.tittle}</a></h3>
                                                <p className="user"><FontAwesomeIcon icon={faUser} /> <a href="#">{val.user}</a></p>
                                                <p className="date"><FontAwesomeIcon icon={faCalendar} /> {val.date}</p>
                                                <p className="detail">{val.description}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;