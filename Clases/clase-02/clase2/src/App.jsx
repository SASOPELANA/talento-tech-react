import "./App.css";
import Header from "./clase-03/Header.jsx";
import Nav from "./clase-03/Nav.jsx";
import Footer from "./clase-03/Footer.jsx";
import Gallery from "./clase-03/Gallery.jsx";
import Boton from "./clase-04/Boton.jsx";
import Formulario from "./clase-04/Formulario.jsx";
import Carrito from "./clase-04/Carrito.jsx";
import Clicker from "./clase-05/Clicker.jsx";
import { Route, Routes } from "react-router-dom";
import Inicio from "./clase-06/Inicio.jsx";
import Contacto from "./clase-06/Contacto.jsx";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
