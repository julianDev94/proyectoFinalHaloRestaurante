import logo from "../../assets/logoFondoBlanco.svg";
import { Container } from "react-bootstrap";

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
      <article className="text-center my-3 novedades-seccion">
        <h2 className="text-light fw-bold py-3">NOVEDADES</h2>
        <Container>
          <div id="scrolling-buttons-container">
            <span className="text-light fs-1 scrolling-button-left">
              <i className="bi bi-chevron-left"></i>
            </span>
            <span className="text-light fs-1 scrolling-button-right">
              <i className="bi bi-chevron-right"></i>
            </span>
          </div>
          <div id="scrolling-container">
            <div className="scrolling-image">
              <img className="w-100 rounded" src="https://d36fw6y2wq3bat.cloudfront.net/recipes/bowl-de-avena-con-arandanos-platano-y-crema-de-cacahuete/900/bowl-de-avena-con-arandanos-platano-y-crema-de-cacahuete_version_1713499310.jpg" alt="Imagen de bowl de avena con arandanos, platano y crema de cacahuate" />
            </div>
            <div className="scrolling-image">
              <img className="w-100 rounded" src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostada-de-queso-con-fresas-y-platano/900/tostada-de-queso-con-fresas-y-platano_version_1710993711.jpg"></img>
            </div>
            <div className="scrolling-image">
              <img className="w-100 rounded" src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"></img>
            </div>
            <div className="scrolling-image">
              <img className="w-100 rounded" src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"></img>
            </div>
            <div className="scrolling-image">
              <img className="w-100 rounded" src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"></img>
            </div>
          </div>
        </Container>
      </article>
    </section>
  );
};

export default Inicio;
