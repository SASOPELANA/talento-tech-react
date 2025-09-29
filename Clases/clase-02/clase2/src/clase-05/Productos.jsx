import { useState, useEffect } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://68d9cf4890a75154f0db3083.mockapi.io/productos")
      .then((repuesta) => repuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Productos</h2>

      <ul>
        {productos.map((productos) => (
          <li key={productos.id}>
            Productos: {productos.nombre} : Precio $ {productos.precio}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Productos;
