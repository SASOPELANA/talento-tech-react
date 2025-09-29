# Talento Tech - React - Clase 2

## Objetivo de la clase

- Crear un proyecto de React

## Comando de craeación

pnpm create vite

## Nombre del proyecto

clase2

## Configuración del proyecto

cd clase2

pnpm install

## Comandos de ejecución

pnpm run dev

# 🪝 useEffect en React

El hook `useEffect` sirve para manejar **efectos secundarios** en componentes funcionales.  
Ejemplos de efectos: llamadas a una API, subscripciones, timers, logs, etc.

## 📌 Sintaxis básica

````jsx
useEffect(() => {
  // tu código del efecto
}, []);



## 📌 Sintaxis básica

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Hola desde useEffect 👋");
  }, []); // , [] -> se ejecuta solo una vez al montar

  return <h1>Mi App</h1>;
}

export default App;


````
