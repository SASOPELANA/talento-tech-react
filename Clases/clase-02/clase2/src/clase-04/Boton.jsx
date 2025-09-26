import { useState } from "react";

const Boton = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Contador</h1>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>+ Boton</button>
      <button onClick={() => setCount(count - 1)}>- Boton </button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </>
  );
};

export default Boton;
