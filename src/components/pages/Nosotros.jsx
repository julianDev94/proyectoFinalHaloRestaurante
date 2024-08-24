import { Container } from "react-bootstrap";
import ImagenJulian from "../../assets/IMG-JulianAballay.jpg";

const Nosotros = () => {
  return (
    <section className="sectionMain componente-Nosotros">
      <Container className="d-flex justify-content-center align-items-center py-3">
        <div id="card-Nosotros">
          <div className="img-julian">
            <img
              src={ImagenJulian}
              alt="Imagen de Julian Aballay"
              className="w-100"
            />
          </div>
          <div className="p-2">
            <h3>Julian Aballay</h3>
            <p>
              Hola! mi nombre es Julian, estudiante avanzado en ingenieria de
              sistemas y actualmente adentrandome al desarrollo web Full Stack
              en Rolling Code School. Apasionado por la tecnologia y por crear
              soluciones optimas para problemas de cualquier tipo.{" "}
            </p>
          </div>
          <div id="card-footer">
            <a href="#">
              <i className="bi bi-github px-1"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin px-1"></i>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Nosotros;
