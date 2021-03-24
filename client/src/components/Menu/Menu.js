import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHome, faPlusSquare, faSignInAlt, faSignOutAlt, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import {logout} from '../../actions/authAction'
import {profileWipe} from '../../actions/profileAction'
import PropTypes from 'prop-types'



class Menu extends Component{

    static propTypes={
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        profileWipe: PropTypes.func.isRequired
    }

    logout=(e)=>{
        this.props.logout()
        this.props.profileWipe()
    }

    render(){
        const {isAuthenticated, user}=this.props.auth
        return(
            <div className="Menu">
                <Container>
                    <span className="HomeIcon">
                        <Link to='/'>Data<FontAwesomeIcon icon={faDatabase} />Vila.com</Link>
                    </span>
                    <ul className="MenuUl">
                        <li><Link to='/home'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link to='/builder'><FontAwesomeIcon icon={faPlusSquare} /> Builder</Link></li>
                        
                        
                        {isAuthenticated ? 
                        <Fragment>
                            <li><Link to='/profile'><FontAwesomeIcon icon={faUser} /> {user.name}</Link></li>
                            <li><Link onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
                        </Fragment>
                        :
                        <Fragment>
                            <li><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
                            <li><Link to='/register'><FontAwesomeIcon icon={faUserPlus} /> Register</Link></li>
                        </Fragment>}
                    </ul>
                </Container>
            </div>
        );
    }
}

const mapStateProps = state =>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateProps,{logout,profileWipe})(Menu);