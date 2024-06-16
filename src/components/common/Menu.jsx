import { Nav, Container, Navbar, NavDropdown, Button } from "react-bootstrap";
import Logo from "../../assets/FONDO BLANCO.svg";
const Menu = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="py-1 fuenteMenu">
      <Container className="d-flex justify-content-around">
        <Navbar.Brand href="#home" className="px-4">
          <img
            src={Logo}
            className="img-fluid"
            alt="Imagen del logo Halo restaurante"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className=" fs-5">
              Inicio
            </Nav.Link>
            <Nav.Link href="#" className=" fs-5">
              Nuestros platos
            </Nav.Link>
            <Nav.Link href="#" className=" fs-5">
              Nosotros
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown className="fs-5" title="Administrador">
              <NavDropdown.Item href="#">Panel de productos</NavDropdown.Item>
              <NavDropdown.Item href="#">Listado de usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#">Listado de pedidos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuario" className=" fs-5">
              <NavDropdown.Item href="#">Mi información</NavDropdown.Item>
              <NavDropdown.Item href="#">Pedidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <div className="iconosMenu">
                <i className="bi bi-cart4 iconosMenu"></i>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="iconosMenu">
                <i className="bi bi-person-fill-add iconosMenu"></i>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="iconosMenu">
                <i class="bi bi-whatsapp iconosMenu "></i>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
