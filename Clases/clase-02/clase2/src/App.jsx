import { useState } from "react";
import "./App.css";
import Header from "./clase-03/Header.jsx";
import Nav from "./clase-03/Nav.jsx";
import Footer from "./clase-03/Footer.jsx";
//import Gallery from "./clase-03/Gallery.jsx";
//import Boton from "./clase-04/Boton.jsx";
//import Formulario from "./clase-04/Formulario.jsx";
//import Carrito from "./clase-04/Carrito.jsx";
//import Clicker from "./clase-05/Clicker.jsx";
import { Route, Routes } from "react-router-dom";
import Inicio from "./clase-06/Inicio.jsx";
import Contacto from "./clase-06/Contacto.jsx";
import DetalleProducto from "./clase-06/DetalleProducto.jsx";
import Admin from "./clase-07/Admin.jsx";
import Login from "./clase-07/Login.jsx";
import RutasProtegidas from "./clase-07/RutasProtegidas.jsx";

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  const inciarSession = () => setEstaAutenticado(true);
  const cerrarSession = () => setEstaAutenticado(false);

  return (
    <>
      <Header />
      <Nav />
      {estaAutenticado ? (
        <button onClick={cerrarSession}>Cerrar Session</button>
      ) : (
        <button onClick={inciarSession}>Iniciar Session</button>
      )}
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route
          path={"/admin"}
          element={
            <RutasProtegidas estaAutenticado={estaAutenticado}>
              <Admin />
            </RutasProtegidas>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"producto/:id"} element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
