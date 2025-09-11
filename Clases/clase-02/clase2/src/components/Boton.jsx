const Boton = () => {
  const handleClick = () => {
    alert("!Boton Clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default Boton;
