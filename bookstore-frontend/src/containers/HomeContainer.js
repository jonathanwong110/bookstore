import React from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function HomeContainer(props) {

  return (
    <div className="category-navigation">
      <br></br>
      <br></br>
      <Container>
        <div className="category-grid">
          <Col style={{ margin: '20px' }} className="category-section">
            <Link to="/books/biography"> <h2 className="text-block"> Biography </h2>
              <Image src="https://pages.uncc.edu/karen-cox/wp-content/uploads/sites/497/2018/03/biography.jpg" rounded width="300px" height="300px" className="category-image"/>
            </Link>
          </Col>
          <Col style={{ margin: '20px' }} className="category-section">
            <Link to="/books/business"> <h2 className="text-block"> Business </h2>
              <Image src="https://static.cdn.printful.com/blog/wp-content/uploads/2019/07/small-business-accounting-guide.jpg" rounded width="300px" height="300px" className="category-image"/>
            </Link>
          </Col>
          <Col style={{ margin: '20px' }} className="category-section">
            <Link to="/books/fiction"> <h2 className="text-block"> Fiction </h2>
              <Image src="https://www.litro.co.uk/wp-content/uploads/2017/06/Fact-in-Fiction-Large.jpg" width="300px" height="300px" className="category-image"/>
            </Link>
          </Col>
          <Col style={{ margin: '20px' }} className="category-section">
            <Link to="/books/mystery"> <h2 className="text-block"> Mystery </h2>
              <Image src="https://galaxypress.com/wp-content/uploads/2018/12/Best-Mystery-Books.jpg" width="300px" height="300px" className="category-image"/>
            </Link>
          </Col>
          <Col style={{ margin: '20px' }} className="category-section">
            <Link to="/books/nonfiction"> <h2 className="text-block"> Non-fiction </h2>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg" width="300px" height="300px" className="category-image"/>
            </Link>
          </Col>
        </div>
      </Container>
    </div>
  )
}

export default HomeContainer