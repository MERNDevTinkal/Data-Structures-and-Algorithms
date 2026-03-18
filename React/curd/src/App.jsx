import { useState } from 'react'
import './App.css'

function App() {
  const [name, Setname] = useState(["tinkal", "deep", "seek", "hello", "laptop"])
  const []
  return (
    <>
      <div>
        {name.map((n, i, arr) => (
          <div key={i}>
            {i}.{n}
            <input type="checkbox"

             />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
