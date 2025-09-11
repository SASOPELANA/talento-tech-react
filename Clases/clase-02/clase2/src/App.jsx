import "./App.css";
import Boton from "./components/Boton";
import ListaEstudiante from "./components/ListaEstudiantes";

function App() {
  return (
    <>
      <div>
        <h1>Mi aplicacion de React</h1>

        <p>Esto es un parráfo, de ejemplo en React y Vite.</p>
        <Boton />
        <ListaEstudiante />
      </div>
    </>
  );
}

export default App;
