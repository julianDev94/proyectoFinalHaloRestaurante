import { useEffect } from "react";
import logo from "../../assets/logoFondoBlanco.svg";
import { Container, Card, Row, Col } from "react-bootstrap";

const Inicio = () => {
  useEffect(() => {
    const btnLeft = document.querySelector("#scrolling-button-left");
    const btnRight = document.querySelector("#scrolling-button-right");
    const content = document.querySelector("#scrolling-container");

    btnLeft.addEventListener("click", () => {
      content.scrollLeft -= 800;
    });

    btnRight.addEventListener("click", () => {
      content.scrollLeft += 800;
    });
  }, []);

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
      <article className="my-4">
        <Container className="text-center">
          <Row>
            <Col sm={12} xl={6}>
              <Card className="shadow-lg text-center border-0 h-100 rounded">
                <Card.Body className="d-flex align-items-center">
                  <Card.Text className="fs-3 p-4">
                    Descubre Halo, tu destino para disfrutar de deliciosos
                    platos saludables y llenos de sabor. En nuestro restaurante,
                    combinamos ingredientes frescos y nutritivos para ofrecerte
                    opciones culinarias que no solo cuidan de tu bienestar, sino
                    que también deleitan tu paladar. Desde bowls de
                    superalimentos hasta platos gourmet, en Halo encontrarás una
                    experiencia gastronómica que nutre cuerpo y alma.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} xl={6}>
              <img
                src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Imagen de Halo Restaurante"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </article>
      <article className="text-center">
        <Container>
          <h2 className="fw-bold">RESEÑAS DE CLIENTES</h2>
          <div className="scroll-container-resenias">
            <div className="resenias shadow-lg my-3 p-3 w-50">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                expedita consequatur tempora. Id facilis natus, exercitationem
                debitis distinctio magni magnam repellat labore ut similique
                atque quod minima, ex mollitia fuga.
              </p>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="resenias shadow-lg my-3 p-3 w-50">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi pariatur assumenda aliquid eum fugiat nobis nesciunt
                tempora, perferendis amet maiores alias reiciendis, magni
                officiis reprehenderit iste iusto sint, sit eos.
              </p>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="resenias shadow-lg my-3 p-3 w-50">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                tempora dolor dicta quis nostrum a inventore unde, eum optio
                ipsa nemo eius quisquam, esse voluptatum? Minima, itaque harum?
                Similique, earum.
              </p>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="resenias shadow-lg my-3 p-3 w-50">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                tempora dolor dicta quis nostrum a inventore unde, eum optio
                ipsa nemo eius quisquam, esse voluptatum? Minima, itaque harum?
                Similique, earum.
              </p>
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <article className="text-center my-3 novedades-seccion">
        <h2 className="text-light fw-bold py-3">NOVEDADES</h2>
        <Container className="d-flex">
          <div className="scrolling-button-container">
            <span className="text-light fs-1" id="scrolling-button-left">
              <i className="bi bi-chevron-left"></i>
            </span>
          </div>
          <div id="scrolling-container">
            <div className="scrolling-image">
              <img
                className="w-100 rounded"
                src="https://d36fw6y2wq3bat.cloudfront.net/recipes/bowl-de-avena-con-arandanos-platano-y-crema-de-cacahuete/900/bowl-de-avena-con-arandanos-platano-y-crema-de-cacahuete_version_1713499310.jpg"
                alt="Imagen de bowl de avena con arandanos, platano y crema de cacahuate"
              />
            </div>
            <div className="scrolling-image">
              <img
                className="w-100 rounded"
                src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostada-de-queso-con-fresas-y-platano/900/tostada-de-queso-con-fresas-y-platano_version_1710993711.jpg"
              ></img>
            </div>
            <div className="scrolling-image">
              <img
                className="w-100 rounded"
                src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"
              ></img>
            </div>
            <div className="scrolling-image">
              <img
                className="w-100 rounded"
                src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"
              ></img>
            </div>
            <div className="scrolling-image">
              <img
                className="w-100 rounded"
                src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostadas-de-naranja-con-pistachos/900/tostadas-de-naranja-con-pistachos_version_1712721714.jpg"
              ></img>
            </div>
          </div>
          <div className="scrolling-button-container">
            <span className="text-light fs-1" id="scrolling-button-right">
              <i className="bi bi-chevron-right"></i>
            </span>
          </div>
        </Container>
      </article>
    </section>
  );
};

export default Inicio;
