import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHome, faPlusSquare, faSignInAlt, faSignOutAlt, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

class Menu extends Component{
    render(){
        return(
            <div className="Menu">
                <Container>
                    <span className="HomeIcon">
                        <Link to='/'>Data<FontAwesomeIcon icon={faDatabase} />Vila.com</Link>
                    </span>
                    <ul className="MenuUl">
                        <li><Link to='/home'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link to='/build'><FontAwesomeIcon icon={faPlusSquare} /> Build</Link></li>
                        <li><Link to='/login'><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
                        <li><Link to='/register'><FontAwesomeIcon icon={faUserPlus} /> Register</Link></li>
                        <li><Link to='/logout'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></li>
                        <li><Link to='/profile'><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Menu;