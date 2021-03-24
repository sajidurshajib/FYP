import React, { Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu.js';

class Builder extends Component{

    render(){
        return(
            <div className="Builder">
                <Menu />
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={this.onChange} name="name" type="text" placeholder="Enter username" />
                                </Form.Group>

                                <div id="editor"></div>
                                <script src="./node_modules/ckeditor/ckeditor.js"></script>
                                <script>
                                    CKEDITOR.replace('editor');
                                </script> 
                                

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form> 
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Builder;