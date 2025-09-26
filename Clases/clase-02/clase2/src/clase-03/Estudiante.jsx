const Estudiante = ({ datosEstudiantes }) => {
  const { nombre, edad, foto } = datosEstudiantes;

  return (
    <>
      <h2>
        Nombre: {nombre}, Edad: {edad}
      </h2>
      <img src={foto} />
    </>
  );
};

export default Estudiante;
