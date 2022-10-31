import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        CoffeEncyclopedia
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/drinks/hot">
                            Hot Drinks
                        </Nav.Link>
                        <Nav.Link as={Link} to="/drinks/iced">
                            Cold Drinks
                        </Nav.Link>
                        <Nav.Link as={Link} to="/favorites">
                            My Favorites
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}