import React, { Component, Fragment } from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row ,Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import Menu from '../Menu/Menu'
import './Profile.css';
import { urlencoded } from 'body-parser';

//import {logout} from '../../actions/authAction'
//import PropTypes from 'prop-types'
import PropBack from '../../assets/img/avatar.jpeg'
class Profile extends Component{
    
    render(){
        const ProPic = {
            backgroundImage:`url(${PropBack})`,
            backgroundColor:"#333",
            width:"220px",
            height:"220px",
            backgroundSize:"cover",
            backgroundPosition:"center",
            borderRadius:"50%",
            border:"4px solid #fff",
            display:"",
            marginRight:"0"
        };
        return(
            <div className="Profile">
                <Menu />
                <div className="profile-header">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="proPic" style={ProPic}></div>
                            </Col>
                            <Col md="9">
                                <h2>Sajidur Rahman</h2>
                                <p className="occupation">Software Engineer <span>[ Junior ]</span></p>
                                <p className="header">Full-stack developer and Linux System administrator</p>
                                <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                <ul className="linkSpan">
                                    <li className="linkPoint"><FontAwesomeIcon icon={faCoins} /> 50</li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faTwitter} /> <a href="">SajidurShajib</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faLinkedin} /> <a href="">sajidurshajib</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faGithub} /> <a href="">sajidurshajib</a></li>
                                </ul>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            </div>
        );
    }
}

export default Profile;