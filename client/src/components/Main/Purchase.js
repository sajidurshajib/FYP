import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

let Purchase = ()=>{
    return(
        <div className="Purchase">
            <Container>
                <h1>Buy point</h1>
                <span className="hspan"></span>
                <div className="purchaseDiv">
                    <Row>
                        <Col md={6}>
                            <div className="singlePurchase">
                                <div className="iconDiv">
                                    <FontAwesomeIcon icon={faDatabase}/>
                                </div>
                                <h2>Purchase from site</h2>
                                <p>You can purchase from use using your credit card. Lorem ipsum dolor sit amet, <Link to="post/purchase">read more...</Link></p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="singlePurchase">
                                <div className="iconDiv">
                                    <FontAwesomeIcon icon={faUsers}/>
                                </div>
                                <h2>Purchase from user</h2>
                                <p>You can purchase from use using your credit card. Lorem ipsum dolor sit amet, <Link to="post/purchase">read more...</Link></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Purchase;