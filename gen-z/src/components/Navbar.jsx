import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './Navbar.css'

function NavScrollExample() {
  return (
    <Container>
      <div className="nun">
      <Nav.Link className='autoo ' href="/">Customer service</Nav.Link>
      <div className="new">
      <div className='blue'>Ge</div>
      <div className='purple'>nz</div>

      </div>
      <div className='picc'>
      <img src="./Vector.png"/>
      <div className='sin'>Sign In / Sign Up</div>
      </div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Ladies</Nav.Link>
              <Nav.Link href="#action2">Men</Nav.Link>
              <Nav.Link href="#action1">Kids</Nav.Link>
              <Nav.Link href="#action2">Sports</Nav.Link>
              <Nav.Link href="#action1">Customize</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search products"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Container>

   

  );
}

export default NavScrollExample;