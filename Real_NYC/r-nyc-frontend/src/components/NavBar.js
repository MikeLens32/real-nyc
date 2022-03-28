import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Welcome from "./Welcome";
import NYC from "./NYC";
import Review from "./Review";
import { Navbar, Nav, Container } from "react-bootstrap"
// import image from "../White ML Logo.png

const NavBar = () => {

  const [reviews, setReviews] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
  })

  useEffect(() => {
    fetch('')
    .then(r => r.json())
    .then((reviewData) => setReviews(reviewData))
    .catch((err) => alert(err))
  }, [])


  const style = {
    width: "2em",
    margin: "0.5em",
    color: "black",
    textDecoration: "none"
  }

  return (
    <Router>
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>NYC</Navbar.Brand>
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
    </div>
    <div>
      <Switch>
        <Route eact path="/">
          <Welcome />
        </Route>
        <Route eact path="/NYC">
          <NYC />
        </Route>
        <Route eact path="/Review">
          <Review />
        </Route>
      </Switch>
    </div>
    </Router>
    )
}

export default NavBar
