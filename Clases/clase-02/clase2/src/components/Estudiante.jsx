const Estudiante = ({ datosEstudiantes }) => {
  const { nombre, edad } = datosEstudiantes;

  return (
    <>
      <h2>
        Nombre: {nombre}, Edad: {edad}
      </h2>
    </>
  );
};

export default Estudiante;
