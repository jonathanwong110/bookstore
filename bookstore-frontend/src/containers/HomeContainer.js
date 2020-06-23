import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function HomeContainer(props) {

  return (
    <div className="category-navigation">
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col xs={5} md={3} style={{ margin: '30px' }}>
            <Link to="/books/biography"> <h2 className="text-block-1"> Biography </h2>
              <Image src="https://pages.uncc.edu/karen-cox/wp-content/uploads/sites/497/2018/03/biography.jpg" rounded width="300px" height="300px" />
            </Link>
          </Col>
          <Col xs={5} md={3} style={{ margin: '30px' }}>
            <Link to="/books/business"> <h2 className="text-block-1"> Business </h2>
              <Image src="https://static.cdn.printful.com/blog/wp-content/uploads/2019/07/small-business-accounting-guide.jpg" rounded width="300px" height="300px" />
            </Link>
          </Col>
          <Col xs={5} md={3} style={{ margin: '30px' }}>
            <Link to="/books/fiction"> <h2 className="text-block-1"> Fiction </h2>
              <Image src="https://www.litro.co.uk/wp-content/uploads/2017/06/Fact-in-Fiction-Large.jpg" width="300px" height="300px" />
            </Link>
          </Col>
          <Col xs={6} md={5} style={{ margin: '30px' }}>
            <Link to="/books/mystery"> <h2 className="text-block-2"> Mystery </h2>
              <Image src="https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg" width="300px" height="300px" />
            </Link>
          </Col>
          <Col xs={6} md={5} style={{ margin: '30px' }}>
            <Link to="/books/nonfiction"> <h2 className="text-block-2"> Non-fiction </h2>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg" width="300px" height="300px" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeContainer