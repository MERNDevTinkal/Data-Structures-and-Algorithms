import { useState } from 'react'
import './App.css'

function App() {
  const [names, setNames] = useState(["tinkal", "deep", "seek", "hello", "laptop"])
  const [showBtn, setShowBtn] = useState({})

  const handleCheck = (i) => {
    setShowBtn({ ...showBtn, [i]: !showBtn[i] })
  }

  const handleDelete = (i) => {
    setNames(names.filter((_, idx) => idx !== i))
  }

  return (
    <>
      <div>
        {names.map((n, i) => (
          <div key={i}>
            {i + 1}.{n}
            <input className='ml-2.5 mr-5.5 mt-2' type="checkbox"
              onChange={() => handleCheck(i)}
            />

            {showBtn[i] &&
              <button className='bg-amber-600 ml-2.5 mr-5.5 mt-2' onClick={() => handleDelete(i)}>
                Delete
              </button>}

          </div>
        ))}
      </div>
    </>
  )
}

export default App

