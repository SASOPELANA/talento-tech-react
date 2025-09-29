import { useState, useEffect } from "react";

const Clicker = () => {
  const [clic, setClic] = useState(0);

  // siempre en useEffect usar -->  , []
  // , [] -> hace que el useEffect corra solo una vez (al montar el componente
  useEffect(() => {
    document.title = `Hiciste ${clic} Clic `;
  }, [clic]);

  return (
    <>
      <button onClick={() => setClic(clic + 1)}>Contador({clic})</button>
    </>
  );
};

export default Clicker;
