import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <body>
        <div class="card">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez">
            <div class="info">
              <h2>Rick Sanchez</h2>
              <p><strong>Status:</strong> Vivo 🟢</p>
              <p><strong>Espécie:</strong> Humano</p>
              <p><strong>Último episódio:</strong> Ricksy Business</p>
              <p><strong>Último local visto:</strong> Earth (Replacement Dimension)</p>
            </div>
        </div>
      </body>
          </>
          )
}

export default App
