import { Container } from "react-bootstrap";

const Nosotros = () => {
  return (
    <section className="sectionMain componente-Nosotros">
      <Container className="d-flex justify-content-center text-center">
        <div id="card-Nosotros">
          <div>
            <p>imagen</p>
          </div>
          <h3>Acerca de mí</h3>
          <p></p>
          <div>
            <a href="#"><i class="bi bi-github"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Nosotros;
