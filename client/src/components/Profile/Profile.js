import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Form ,Button ,Row ,Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import {faMarker} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/Menu'
import './Profile.css';

import PropTypes from 'prop-types'
import store from '../../store'
import {loadProfile, newProfile, updateProfile} from '../../actions/profileAction' 

import Pds from './PersonalDataSet/PersonalDataSet'



class Profile extends Component{
    
    static propTypes={
        auth: PropTypes.object.isRequired,
        loadProfile: PropTypes.object.isRequired,
        newProfile: PropTypes.func.isRequired,
        updateProfile: PropTypes.func.isRequired
    }

    state={
        editProfile: false,
        
        image:'',
        occupation:'',
        position:'',
        header:'',
        bio:'',
        email:'',
        twitter:'',
        linkedin:'',
        github:'',

        yourDataSet:false

    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    newSubmit= e =>{
        e.preventDefault()

        const {image,occupation,position,header,bio,email,twitter,linkedin,github} = this.state

        const newProfile = {image,occupation,position,header,bio,email,twitter,linkedin,github}

        this.props.newProfile(newProfile)

        store.dispatch(loadProfile())
    }

    updateSubmit= e =>{
        e.preventDefault()

        const {image,occupation,position,header,bio,email,twitter,linkedin,github} = this.state

        let updateProfile = {}

        if(image!==''){updateProfile['image']=image}
        if(occupation!==''){updateProfile['occupation']=occupation}
        if(position!==''){updateProfile['position']=position}
        if(header!==''){updateProfile['header']=header}
        if(bio!==''){updateProfile['bio']=bio}
        if(email!==''){updateProfile['email']=email}
        if(twitter!==''){updateProfile['twitter']=twitter}
        if(linkedin!==''){updateProfile['linkedin']=linkedin}
        if(github!==''){updateProfile['github']=github}

        this.props.updateProfile(updateProfile)

        store.dispatch(loadProfile())
    }

    toggleEdit = ()=>{
        this.setState({editProfile: !this.state.editProfile})
    }

    componentDidMount(){
        store.dispatch(loadProfile())
    }

    render(){
        const {isAuthenticated,token,user}=this.props.auth
        const {profileExist, profileData, profileLoading}=this.props.profile

        return(
            <div className="Profile">
                {token!==null || isAuthenticated ? null : <Redirect to='/'/>}
                <Menu />
                <div className="profile-header">
                    <Container>
                    {profileExist && !profileLoading ? (
                        <Fragment>
                        <Row>
                            <Col md="3">
                                <div className="proPic" style={{backgroundImage:`url(${profileData.profile[0]?.image})`,
                                    backgroundColor:"#333",
                                    width:"220px",
                                    height:"220px",
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    borderRadius:"50%",
                                    border:"4px solid #fff",
                                    display:"",
                                    marginRight:"0"}}>
                                    <FontAwesomeIcon icon={faMarker} title="edit profile" onClick={this.toggleEdit}/>
                                </div>
                                
                            </Col>
                            <Col md="9">
                                {isAuthenticated ? 
                                <Fragment>
                                    <h2>{user.name}</h2>
                                </Fragment>
                                : null
                                }
                                
                                <p className="occupation">{profileData.profile[0]?.occupation}<span> [ {profileData.profile[0]?.position} ]</span></p>
                                <p className="header">{profileData.profile[0]?.header}</p>
                                <p className="bio">{profileData.profile[0]?.bio}</p>
                                <p className="email"><FontAwesomeIcon icon={faEnvelope} /> {profileData.profile[0]?.email}</p>
                                <ul className="linkSpan">
                                    <li className="linkPoint"><FontAwesomeIcon icon={faCoins} /> {profileData.profile[0]?.point}</li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faTwitter} /> <a href={`https://www.twitter.com/${profileData.profile[0]?.twitter}`} target="_blank">{profileData.profile[0]?.twitter}</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faLinkedin} /> <a href={`https://www.linkedin.com/in/${profileData.profile[0]?.linkedin}`} target="_blank">{profileData.profile[0]?.linkedin}</a></li>
                                    <li className="linkPoint"><FontAwesomeIcon icon={faGithub} /> <a href={`https://www.github.com/${profileData.profile[0]?.github}`} target="_blank">{profileData.profile[0]?.github}</a></li>
                                </ul>
                            </Col>
                        </Row>
                        </Fragment>
                        )                        
                         :( 
                        //  if profile have no info
                        <Fragment>
                        <h2>Complete your profile...</h2>
                        <br/>
                        <br/>
                        <Form onSubmit={this.newSubmit}> 
                            <Row>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Profile picture</Form.Label>
                                        <Form.Control onChange={this.onChange} name="image" type="text" placeholder="image url" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control onChange={this.onChange} name="occupation" type="text" placeholder="Occupation name" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control onChange={this.onChange} name="position" type="text" placeholder="Your position" />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Header</Form.Label>
                                        <Form.Control onChange={this.onChange} name="header" type="text" placeholder="Header text" />
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control onChange={this.onChange} name="bio" as="textarea" type="text" placeholder="your bio" rows="5"/>
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={this.onChange} name="email" type="email" placeholder="Your email" />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control onChange={this.onChange} name="twitter" type="text" placeholder="Twitter username" />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Linkedin</Form.Label>
                                        <Form.Control onChange={this.onChange} name="linkedin" type="text" placeholder="linkedin username" />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Github</Form.Label>
                                        <Form.Control onChange={this.onChange} name="github" type="text" placeholder="github username" />
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
                        )}


                    </Container>
                </div>


                <Container>
                                            
                {this.state.editProfile && profileExist ?  <Fragment>
                        <div className="update-section">
                        <br/>
                        <hr/>
                        <br/>
                        <h2>Update your profile</h2>
                        <br/>
                        <br/>
                        <Form onSubmit={this.updateSubmit}>
                            <Row>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Profile picture</Form.Label>
                                        <Form.Control onChange={this.onChange} name="image" type="text" placeholder={profileData.profile[0]?.image}/>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control onChange={this.onChange} name="occupation" type="text" placeholder={profileData.profile[0]?.occupation}/>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control onChange={this.onChange} name="position" type="text" placeholder={profileData.profile[0]?.position}/>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label>Header</Form.Label>
                                        <Form.Control onChange={this.onChange} name="header" type="text" placeholder={profileData.profile[0]?.header}/>
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Form.Group>
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control onChange={this.onChange} as="textarea" name="bio" type="text" placeholder={profileData.profile[0]?.bio} rows="5"/>
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={this.onChange} name="email" type="email" placeholder={profileData.profile[0]?.email} />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control onChange={this.onChange} name="twitter" type="text" placeholder={profileData.profile[0]?.twitter}/>
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Linkedin</Form.Label>
                                        <Form.Control onChange={this.onChange} name="linkedin" type="text" placeholder={profileData.profile[0]?.linkedin}/>
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group>
                                        <Form.Label>Github</Form.Label>
                                        <Form.Control onChange={this.onChange} name="github" type="text" placeholder={profileData.profile[0]?.github}/>
                                    </Form.Group>
                                </Col>
                                <Col md="12">
                                    <Button className="btnUpdate" variant="danger" type="submit">
                                        Update
                                    </Button>
                                </Col>
                            </Row>
                        </Form> 
                        </div>
                        </Fragment > :null}

                </Container>

                <Pds />
                
                
            </div>
        );
    }
}

const mapStateProps = state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateProps,{newProfile, updateProfile})(Profile);