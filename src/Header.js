import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.log(user);
  function logout() {
    localStorage.clear();
    navigate("/register");
  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login </Link>
              <Link to="/register">Register </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}
export default Header;
