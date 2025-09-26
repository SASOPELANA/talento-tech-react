import { useState } from "react";

const Formulario = () => {
  const [nombre, setnombre] = useState();

  const manejoEnvio = (evento) => {
    (evento.preventDefault(), alert(`Enviaste el Form: ${nombre}`));
  };

  return (
    <form onSubmit={manejoEnvio}>
      <input
        value={nombre}
        type="text"
        onChange={(evento) => setnombre(evento.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
