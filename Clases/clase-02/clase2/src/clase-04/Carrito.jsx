import { useState } from "react";

const Carrito = () => {
  const listaProductos = [
    {
      id: 1,
      nombre: " Cebolla ",
      precio: 600,
    },
    {
      id: 2,
      nombre: " Papa ",
      precio: 700,
    },
    {
      id: 3,
      nombre: " Batata ",
      precio: 500,
    },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <h2>Productos</h2>
      <ul>
        {listaProductos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} : {producto.precio} $
            <button onClick={() => agregarCarrito(producto)}>Agregar</button>
          </li>
        ))}
      </ul>

      <hr></hr>

      <h1>Carrito</h1>

      {carrito.map((producto) => (
        <p key={producto.id}>
          {producto.nombre} : {producto.precio} $
        </p>
      ))}

      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </>
  );
};

export default Carrito;
