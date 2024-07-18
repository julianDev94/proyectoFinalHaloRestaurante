import logo from "../../assets/logoFondoBlanco.svg";

const Inicio = () => {
  return (
    <section className="sectionMain">
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
        <div className="textoInicio">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore aut rerum! Sint incidunt suscipit ex ratione natus soluta a. Officia maiores quibusdam accusantium fugiat vel porro aliquam fuga? Quaerat?</p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
