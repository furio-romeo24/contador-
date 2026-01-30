import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [color, setColor] = useState("red")   

  function handleClick() {
    setContador(contador + 100)

    const colores = ["red", "blue", "green", "purple", "orange", "pink"]
    const colorNuevo = colores[Math.floor(Math.random() * colores.length)]
    setColor(colorNuevo)
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contador de clicks</h1>

      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: 'white', padding: "10px 20px", fontSize: "18px" }}
      >
        Clickear
      </button>

      <p>Clicks: {contador}</p>
    </div>
  )
}

export default App