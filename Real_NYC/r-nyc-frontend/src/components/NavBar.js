import Welcome from "./Welcome";
import ToDo from "./To-Do";
import Review from "./Review"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

  return (
    <div>
      <Router>
      <div className="NavBar">
        <Navbar bg="blue" variant="blue">
        <Container>
        <Navbar.Brand path="/">
          {/* <img className="ML" src={image} alt="Mike_Lens"/> */}
        </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Welcome</Nav.Link>
            <Nav.Link as={Link} to={"/ToDo"}>NYC</Nav.Link>
            <Nav.Link as={Link} to={"/Review"}>Review</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </div>
      <div>
      <Switch >
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/ToDo">
          <ToDo reviews={reviews} />
        </Route>
        <Route exact path="/Review">
          <Review setReviews={setReviews} />
        </Route>
      </Switch>
      </div>
      </Router>
    </div>
    )
}

export default NavBar
