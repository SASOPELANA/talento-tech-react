import { useState } from "react";
import { useEffect } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError("Ha Ocurrido un error...");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Estan cargando los productos...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <ul>
        <h3>Productos</h3>
        {productos.map((producto) => (
          <li>
            <h2>Producto: {producto.title} </h2>

            <p>Precio $ {producto.price}</p>
            <img src={producto.image} width={100} height={100} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Productos;
