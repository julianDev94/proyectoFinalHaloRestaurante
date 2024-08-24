import { Container, Button } from "react-bootstrap";
import logoSolo from '../../assets/logoFondoBlanco.svg';
import ImgERROR from '../../assets/img-error404.png';
const Error404 = () => {
    return (
        <section className="sectionMain d-flex justify-content-center align-items-center">
            <Container className="text-center my-3">
                <div>
                    <img src={ImgERROR} alt="Imagen de error404" />
                </div>
                <h1 className="text-danger fw-bold display-1">ERROR 404!</h1>
                <p className="fw-bold fs-4">ESTAMOS TRABAJANDO EN ELLO</p>
                <div className="mb-3">
                    <img src={logoSolo} alt="Imagen de logo de halo" />
                </div>
                <Button variant="dark">Volver a inicio</Button>
            </Container>
        </section>
    );
};

export default Error404;