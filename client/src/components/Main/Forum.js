import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

let Forum = ()=>{
    return(
        <div className="Forum">
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h1>Our forum</h1>
                        <p>Discuss your oppertunity in DataVila.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis laborum atque maxime ipsum doloremque expedita quaerat consequuntur sapiente. Odio, qui, mollitia cum eaque libero corporis fugit unde facilis animi necessitatibus soluta ex eveniet alias esse, possimus nostrum aspernatur ipsam?</p>
                        <button>DataVila.com/Forum <FontAwesomeIcon icon={faArrowCircleRight}/></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Forum;