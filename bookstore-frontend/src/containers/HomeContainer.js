import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

class HomeContainer extends Component {

    render() {
        return (
            <div class="category-navigation">
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col xs={5} md={3} style={{ margin: '30px' }}>
                            <Image src="https://pages.uncc.edu/karen-cox/wp-content/uploads/sites/497/2018/03/biography.jpg" rounded width="300px" height="300px"/>
                        </Col>
                        <Col xs={5} md={3} style={{ margin: '30px' }}>
                            <Image src="https://static.cdn.printful.com/blog/wp-content/uploads/2019/07/small-business-accounting-guide.jpg" rounded width="300px" height="300px"/>
                        </Col>
                        <Col xs={5} md={3} style={{ margin: '30px' }}>
                            <Image src="https://tinhouse.com/wp-content/uploads/2017/07/Fiction-2017.jpg" width="300px" height="300px" />
                        </Col>
                        <Col xs={5} md={3} style={{ margin: '30px' }}>
                            <Image src="https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg" width="300px" height="300px" />
                        </Col>
                        <Col xs={5} md={3} style={{ margin: '30px' }}>
                            <Image src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/cbuunlju1u0z13wrsfdi.jpg" width="300px" height="300px" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeContainer;