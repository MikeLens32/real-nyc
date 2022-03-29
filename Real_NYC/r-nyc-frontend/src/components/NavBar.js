import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from "./Welcome";
import NYC from "./NYC";
import Review from "./Review";
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {

  const [reviews, setReviews] = useState({
    title: '',
    location: '',
    description: '',
    image: '',
    price: '',
    tags: '',
  })

  useEffect(() => {
    const fetchData = async () =>{
        try {
            const resp = await fetch('http://localhost:9393/reviews')
            const data = await resp.json()
            setReviews(data)
        } catch (error) {
            alert(error)
        }
    }

    fetchData()

}, [])

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
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/NYC">
          <NYC review={reviews}/>
        </Route>
        <Route exact path="/Review">
          <Review setReviews={setReviews}/>
        </Route>
      </Switch>
    </div>
    </Router>
    )
}

export default NavBar
