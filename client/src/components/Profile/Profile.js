import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import {Form ,Button ,Row ,Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import {faMarker} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/Menu'
import './Profile.css';

import PropTypes from 'prop-types'
import PropBack from '../../assets/img/avatar.jpeg'
class Profile extends Component{
   
    static propTypes={
        auth: PropTypes.object.isRequired
    }

    state={
        profileExist: !null,
        editProfile: false
    }



    toggleEdit = ()=>{
        this.setState({editProfile: !this.state.editProfile})
    }

    render(){
        const {isAuthenticated,user}=this.props.auth
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
        }
        return(
            <div className="Profile">
                <Menu />
                <div className="profile-header">
                    <Container>
                    {this.state.profileExist ? (
                        <Row>
                            <Col md="3">
                                <div className="proPic" style={ProPic}>
                                    <FontAwesomeIcon icon={faMarker} title="edit profile" onClick={this.toggleEdit}/>
                                </div>
                                
                            </Col>
                            <Col md="9">
                                <h2>Sajidur Rahman</h2>
                                <p className="occupation">Software Engineer <span>[ Junior ]</span></p>
                                <p className="header">Full-stack developer and Linux System administrator</p>
                                <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                <p className="email"><FontAwesomeIcon icon={faEnvelope} /> sajidur.inbox@gmail.com</p>
                                <ul className="linkSpan">
                                    <li className="linkPoint"><FontAwesomeIcon icon={faCoins} /> 50</li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faTwitter} /> <a href={'www.google.com'}>SajidurShajib</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faLinkedin} /> <a href={'www.google.com'}>sajidurshajib</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faGithub} /> <a href={'www.google.com'}>sajidurshajib</a></li>
                                </ul>
                            </Col>
                        </Row>
                        )                        
                         :( 
                        //  if profile have no info
                        <Fragment>
                        <h2>Complete your profile...</h2>
                        <br/>
                        <br/>
                        <Form>
                            <Row>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Profile picture</Form.Label>
                                        <Form.Control name="image" type="text" placeholder="image url" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control name="occupation" type="text" placeholder="Occupation name" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control name="position" type="text" placeholder="Your position" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Header</Form.Label>
                                        <Form.Control name="header" type="text" placeholder="Header text" />
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control as="textarea" name="Bio" type="text" placeholder="your bio" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control name="twitter" type="text" placeholder="Twitter username" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Linkedin</Form.Label>
                                        <Form.Control name="linkedin" type="text" placeholder="linkedin username" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Github</Form.Label>
                                        <Form.Control name="github" type="text" placeholder="github username" />
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Button className="btnCustom" variant="danger" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form> 
                        </Fragment >
                        ) }


                    </Container>
                </div>


                <Container>
                                            
                {this.state.editProfile ?  <Fragment>
                        <br/>
                        <hr/>
                        <br/>
                        <h2>Update your profile</h2>
                        <br/>
                        <br/>
                        <Form>
                            <Row>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Profile picture</Form.Label>
                                        <Form.Control name="image" type="text" placeholder="image url" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control name="occupation" type="text" placeholder="Occupation name" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control name="position" type="text" placeholder="Your position" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Header</Form.Label>
                                        <Form.Control name="header" type="text" placeholder="Header text" />
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control as="textarea" name="Bio" type="text" placeholder="your bio" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control name="twitter" type="text" placeholder="Twitter username" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Linkedin</Form.Label>
                                        <Form.Control name="linkedin" type="text" placeholder="linkedin username" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group>
                                        <Form.Label>Github</Form.Label>
                                        <Form.Control name="github" type="text" placeholder="github username" />
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Button className="btnCustom" variant="danger" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form> 
                        </Fragment > :null}

                </Container>
            </div>
        );
    }
}

const mapStateProps = state =>({
    auth: state.auth
})

export default connect(mapStateProps)(Profile);