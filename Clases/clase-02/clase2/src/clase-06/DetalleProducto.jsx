import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => {
        setError("Ha Ocurrido un error...");
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h2>Detalle del Producto N°: {id}</h2>

      <img src={producto.image} width={100} height={100} />

      <h3>Nombre del producto: {producto.title}</h3>
      <p>Descripcion: {producto.description}</p>
    </>
  );
};

export default DetalleProducto;
