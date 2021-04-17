import React, { Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar} from '@fortawesome/free-solid-svg-icons';
import renderHTML from 'react-render-html';
import Menu from '../Menu/Menu.js';
import './Home.css';
import LoadingGif  from '../../assets/img/loading.gif'
import JSONDATA from "./MOCK_DATA.json"


import PropTypes from 'prop-types'
import store from '../../store'
import {loadForm} from '../../actions/formAction' 

class Home extends Component{

    static propTypes={
        loadForm: PropTypes.object.isRequired
    }

    state={
        search:'',
        loading:true
    }

    componentDidMount(){
        store.dispatch(loadForm())
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        const {formAll, formLoading} = this.props.form
        if(Object.keys(formAll)==""){
            console.log(formAll)
        }
        
        
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
                                <br/>
                                
                                <Form className="searchForm">
                                    
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control name="search" onChange={this.onChange} type="text" placeholder="Search..." />
                                    </Form.Group>
                                    
                                                                       
                                </Form> 

                            </Col>
                        </Row>
                    </Container>
                </div>   
                <div className="homeData">
                    <Container>
                        {Object.keys(formAll)!="" ?
                        formAll.form.filter((val)=>{
                            if(this.state.search==""){
                                return val;
                            }else if(val.title.toLocaleLowerCase().includes(this.state.search.toLowerCase())){
                                return val;
                            }
                        }).map((val, key)=>{
                            return(
                                <div className="everyResult" key={key}>
                                    <Row>
                                        <Col md="2"></Col>
                                        <Col md="8">
                                            <div className="everyWrapper">
                                                <h3><a href={`form/${val._id}`}>{val.title}</a></h3>
                                                <p className="user"><FontAwesomeIcon icon={faUser} /> <a href="#">{val.author_name}</a></p>
                                                <p className="date"><FontAwesomeIcon icon={faCalendar} /> {val.date}</p>
                                                <div className="detail">{renderHTML(val.description)}</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })
                        :(<Fragment>
                            <img style={{margin:"0 auto",display:"block", width:"50%"}} src={LoadingGif} />
                        </Fragment>)}
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateProps = state =>({
    form: state.form
})

export default connect(mapStateProps,{loadForm})(Home);