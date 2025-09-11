import Estudiante from "./Estudiante";

const ListaEstudiantes = () => {
  const datosEstudiantes = [
    { nombre: "Juan Perez", edad: 23 },
    { nombre: "Maria Perez", edad: 22 },
    { nombre: "Pedro Perez", edad: 28 },
  ];

  return (
    <>
      {datosEstudiantes.map((estudiante, index) => (
        <Estudiante key={index} datosEstudiantes={estudiante} />
      ))}
    </>
  );
};

export default ListaEstudiantes;
