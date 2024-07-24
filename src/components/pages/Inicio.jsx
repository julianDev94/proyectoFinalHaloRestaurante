import logo from "../../assets/logoFondoBlanco.svg";
import { Container, Image } from "react-bootstrap";

const Inicio = () => {
  return (
    <section className="sectionMain">
      <article className="articuloBanner">
        <div className="imagen-container">
          <img
            className="bannerInicio"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagen de restaurante"
          />
          <div className="logoFondoBlanco">
            <img src={logo} alt="imagen de logo" />
          </div>
          <img
            className="bannerInicio"
            src="https://images.unsplash.com/photo-1522906456132-bac22adad34e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagen de plato de comida"
          />
        </div>
      </article>
      <article className="text-center my-3">
        <Container>
          <h2 className="fw-bold">RESEÑAS DE CLIENTES</h2>
        </Container>
      </article>
      <article className="text-center my-3 bg-primary">
        <h2 className="text-light fw-bold">NOVEDADES</h2>
        <Container className="carousel-novedades">
            <div className="novedades-images"><Image src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"></Image></div>
            <div className="novedades-images"><Image src=""></Image></div>
            <div className="novedades-images"><Image src=""></Image></div>
            <div className="novedades-images"><Image src=""></Image></div>
        </Container>
      </article>
    </section>
  );
};

export default Inicio;
