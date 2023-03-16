import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModelDangNhap from './ModelDangNhap';
import { useState } from 'react';
import ModelDangKy from './ModalDangKy';
import { useSelector } from 'react-redux';
import './Header.scss'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  const nomal = useSelector(state => state.accountThanh.nomal);
  const Account = useSelector(state => state.accountThanh.Account)

  const img1 = 'http://localhost:8080'
  console.log(Account)
  const [showdangnhap, setshowdangnhap] = useState(false);
  const [showdangky, setshowdangky] = useState(false);


  return (
    <div>
      <div className='header-top'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              {
                nomal === false ?
                  <>
                    <Nav className='btn_signin'>

                      <Button onClick={() => setshowdangnhap(true)} variant="primary">Sign in</Button>
                      <ModelDangNhap show={showdangnhap} setShow={setshowdangnhap}
                      />
                      <Button variant="warning" onClick={() => setshowdangky(true)}>dang ky</Button>
                      <ModelDangKy show={showdangky} setShow={setshowdangky} />
                    </Nav>
                  </> :
                  <NavDropdown title="settin" >
                    <NavDropdown.Item eventKey="4.1"> <img src={`${img1}${Account.Avater}`} /> <span> {Account.Last_Name}</span></NavDropdown.Item>
                    <Link to={Account.Last_Name} className='nav-link'> Trang cá nhân </Link>
                    <Link to='profiles' className='nav-link'> Cài đặt</Link>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>

                  </NavDropdown>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
                <Outlet/>
      </div>
    </div>


  )
}
export default Header;