import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDatabase, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import './Register.css';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {register} from '../../actions/authAction'
import {clearErrors} from '../../actions/errorAction'

class Register extends Component {
    
    state={
        name:'',
        email:'',
        password:'',
        cnf_password:'',
        msg:null
    }

    static propTypes={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const {error} = this.props
        if(error!==prevProps.error){
            if(error.id==='REGISTER_FAIL')
                this.setState({msg:error.msg.msg})
            else
                this.setState({msg:null})
        }
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault()

        const {name, email, password, cnf_password} = this.state

        const newUser={
            name,
            email,
            password,
            cnf_password
        }

        this.props.register(newUser)
    }

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

                            {this.state.msg ? (<Alert variant="danger">{this.state.msg}</Alert>):null}
                            
                                <Form onSubmit={this.onSubmit}>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={this.onChange} name="name" type="text" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Your email</Form.Label>
                                        <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={this.onChange} name="password" type="password" placeholder="password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control onChange={this.onChange} name="cnf_password" type="password" placeholder="password" />
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

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    {register, clearErrors}
    )(Register)
