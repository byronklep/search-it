import { Navbar, Nav } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'
import { FiImage } from 'react-icons/fi'
import { BsNewspaper } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <FaSistrix size={36} />
          Search It!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/image">
              <FiImage /> Image
            </Nav.Link>
            <Nav.Link href="/news">
              <BsNewspaper /> News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
