import { Nav, Container, Navbar, NavDropdown, Button } from "react-bootstrap";
import Logo from "../../assets/FONDO BLANCO.svg";
const Menu = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="py-1 fuenteMenu">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="img-fluid"
            alt="Imagen del logo Halo restaurante"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#">Nuestros platos</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="Administrador">
              <NavDropdown.Item href="#">Panel de productos</NavDropdown.Item>
              <NavDropdown.Item href="#">Listado de usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#">Panel de pedidos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuario">
              <NavDropdown.Item href="#">Mi información</NavDropdown.Item>
              <NavDropdown.Item href="#">Pedidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <a class="iconosMenu" href="#">
                <i className="bi bi-person-fill-add iconosMenu"></i>
              </a>
            </Nav.Link>
            <Nav.Link href="#">
              <a class="iconosMenu" href="#">
                <i className="bi bi-cart4 iconosMenu"></i>
              </a>
            </Nav.Link>
            <Nav.Link href="#">
              <Button className="botonMenu">
                <i class="bi bi-whatsapp"></i>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
