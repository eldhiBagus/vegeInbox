import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/Image';

function Navigasi() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link href="/">
            <Image
              alt="hehe"
              src="/caca.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="ms-5"><Link href="/"><b>Home</b></Link></Nav.Link>
            <Nav.Link className="ms-5"><Link href="/abouts"><b>About Us</b></Link></Nav.Link>
            <Nav.Link className="ms-5"><Link href="/product"><b>Products</b></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;