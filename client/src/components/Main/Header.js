import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

let Header = ()=>{
    return(
        <div className="Header">
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h1>Built your own dataset</h1>
                        <p>Datavila is data sharing platform where you built own dataset.<br/>Lorem ipsum dolor sit ametLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>    

                        <button className="header-btn">For developers</button>
                        <button className="header-btn">For businesses</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;