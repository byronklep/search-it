import { Navbar } from 'react-bootstrap'
import { FaSistrix } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <FaSistrix size={36} />
          Search It!
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
