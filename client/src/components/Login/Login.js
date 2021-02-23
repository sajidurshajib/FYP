import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import {Container, Row, Col, Form, Button,Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDatabase} from '@fortawesome/free-solid-svg-icons';
import './Login.css';

import PropTypes from 'prop-types'
import {login} from '../../actions/authAction'
import {clearErrors} from '../../actions/errorAction'
import { connect } from 'react-redux';
 
class Login extends Component {
    
    state={
        email:'',
        password:'',
        msg:null
    }

    static propTypes={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
  

    componentDidUpdate(prevProps){
        const {error} = this.props
        if(error!==prevProps.error){
            if(error.id==='LOGIN_FAIL')
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

        const {email, password} = this.state

        const user={
            email,
            password
        }

        this.props.login(user)
    }

    render(){
        return(
            <div className="Login">
                {this.props.isAuthenticated ? <Redirect to='profile/'/> :null}
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
                            {this.state.msg ? (<Alert variant="danger">{this.state.msg}</Alert>):null}
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>password</Form.Label>
                                        <Form.Control onChange={this.onChange} name="password" type="password" placeholder="Enter password" />
                                    </Form.Group>

                                    <p><Link to="/register">Register</Link><span className="rightSpan"><Link to="#">Forgot password?</Link></span></p>

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

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps,{login,clearErrors})(Login);
