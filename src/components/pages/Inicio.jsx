import logo from "../../assets/logoFondoBlanco.svg";
import { Container, Row,Col } from "react-bootstrap";

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
          <h2 className="">RESEÑAS DE CLIENTES</h2>
          <Row>
            <Col>
              <div
                data-bs-spy="scroll"
                data-bs-target="#simple-list-example"
                data-bs-offset="0"
                data-bs-smooth-scroll="true"
                className="scrollspy-example"
                tabindex="0"
              >
                <h4 id="simple-list-item-1">Item 1</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quibusdam repellendus eligendi voluptates neque, nam impedit id blanditiis ducimus aut odio. Exercitationem ea aliquid, molestias corrupti explicabo molestiae beatae maxime.</p>
                <h4 id="simple-list-item-2">Item 2</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quibusdam repellendus eligendi voluptates neque, nam impedit id blanditiis ducimus aut odio. Exercitationem ea aliquid, molestias corrupti explicabo molestiae beatae maxime.</p>
                <h4 id="simple-list-item-3">Item 3</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quibusdam repellendus eligendi voluptates neque, nam impedit id blanditiis ducimus aut odio. Exercitationem ea aliquid, molestias corrupti explicabo molestiae beatae maxime.</p>
                <h4 id="simple-list-item-4">Item 4</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quibusdam repellendus eligendi voluptates neque, nam impedit id blanditiis ducimus aut odio. Exercitationem ea aliquid, molestias corrupti explicabo molestiae beatae maxime.</p>
                <h4 id="simple-list-item-5">Item 5</h4>
                <p>...</p>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Inicio;
