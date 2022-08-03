import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import caca from '../public/caca.png'

function Navigasi() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link href="/" passHref>
            <Image
              src={caca}
              alt="hehe"
              width={100}
              height={50}
              className="d-inline-block align-top"
            /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="ms-5"><Link href="/" passHref><a><b>Home</b></a></Link></Nav.Link>
            <Nav.Link className="ms-5"><Link href="/abouts" passHref><a><b>About Us</b></a></Link></Nav.Link>
            <Nav.Link className="ms-5"><Link href="/product" passHref><a><b>Products</b></a></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;