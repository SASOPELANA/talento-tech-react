import "./App.css";
import Boton from "./components/Boton";
import ListaEstudiantes from "./components/ListaEstudiantes";

function App() {
  return (
    <>
      <div>
        <h1>Mi aplicacion de React</h1>

        <p>Esto es un parráfo, de ejemplo en React y Vite.</p>
        <Boton />
        <ListaEstudiantes nombre='Juan Perez' edad='25' />
        <ListaEstudiantes nombre='Pedro Gomez' edad='30' />
        <ListaEstudiantes nombre='Maria Lopez' edad='21' />
      </div>
    </>
  );
}

export default App;
