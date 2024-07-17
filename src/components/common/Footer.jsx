import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/FONDO BLANCO.svg";

const Footer = () => {
  return (
    <section className="estiloFooter py-3 text-light text-center">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <img src={Logo} alt="Icono de Halo" />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <p>
              &copy; HALO RESTAURANTE - 2024 - Todos los derechos reservados.
            </p>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <h3>SEGUINOS EN REDES!</h3>
            <i className="bi bi-facebook me-4 iconosFooterTamanio"></i>
            <i className="bi bi-instagram iconosFooterTamanio"></i>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
