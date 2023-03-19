import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ball from '../assets/img/ball.png'

import { NavLink } from "react-router-dom";


function navigator() {
  const setActivo = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> Router II</Navbar.Brand>
          <img
            alt=""
            src={ball}
            width="70"
            height="70"
            className="align-item-center justify-content-center"
          />
          <Nav className="position-relative">
            <Nav.Link className="position-end">
              <NavLink to="/" className={`text-white text-decoration-none ${setActivo}`}>
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link className="position-end">
              <NavLink to="/Pokemons/random" className={`text-danger text-decoration-none ${setActivo}`}>
                Pokemons
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default navigator;