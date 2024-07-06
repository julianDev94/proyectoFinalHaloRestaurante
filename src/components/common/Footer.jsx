import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/FONDO BLANCO.svg";
const Footer = () => {
  return (
    <section className="backogroundFooter">
      <Container className="py-3 text-light text-center">
        <Row>
          <Col>
            <img src={Logo} alt="Icono de Halo" />
          </Col>
          <Col>
          <h3>SEGUINOS EN REDES!</h3>
          <i className="bi bi-facebook me-4 iconosFooterTamanio"></i>
          <i className="bi bi-instagram iconosFooterTamanio"></i>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <p>&copy; HALO RESTAURANTE - 2024 - Todos los derechos reservados.</p>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
