import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap"
import Welcome from "./Welcome";
import NYC from "./NYC";
import Review from "./Review";
import "../css/NavBar.css"

const NavBar = () => {

  return (
    <Router>
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <img className="Logo" src={window.location.origin + "/Logo_NYC.png"} alt="Logo" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'} >Home</Nav.Link>
              <Nav.Link as={Link} to={'/NYC'}>NYC</Nav.Link>
              <Nav.Link as={Link} to={'/Review'}>Review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/NYC">
          <NYC />
        </Route>
        <Route exact path="/Review">
          <Review />
        </Route>
      </Switch>
    </div>
    </Router>
    )
}

export default NavBar
