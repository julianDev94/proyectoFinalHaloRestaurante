import { Container, Card } from "react-bootstrap";
import ImagenJulian from "../../assets/IMG-JulianAballay.jpg";

const Nosotros = () => {
  return (
    <section className="sectionMain componente-Nosotros">
      <Container className="d-flex justify-content-center align-items-center py-3">
        <Card className="card-Julian shadow">
          <Card.Img variant="top" src={ImagenJulian} />
          <Card.Body className="text-center">
            <Card.Title className="fs-3 fw-bold">Julian Aballay</Card.Title>
            <Card.Text>
              Hola! mi nombre es Julian, estudiante avanzado en ingeniería de
              sistemas y actualmente me encuentro adentrandome al desarrollo web Full Stack
              en Rolling Code School. Apasionado por la tecnologia y por dar soluciones optimas para problemas que requieran del uso de tecnologías.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted text-center fs-3">
          <a href="#"><i class="bi bi-github mx-2"></i></a>
          <a href=""><i class="bi bi-linkedin mx-2"></i></a>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
};


export default Nosotros;
