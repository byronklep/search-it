import { Navbar } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <FaSistrix size={36} />
          Search It!
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
