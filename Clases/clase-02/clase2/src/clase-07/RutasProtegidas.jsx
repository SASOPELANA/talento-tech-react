import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ estaAutenticado, children }) => {
  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RutasProtegidas;
