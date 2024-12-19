import { useState } from 'react'

import './App.css'
import ScanbotScanner from './components/ScanbotScanner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Scanbot Barcode Scanner</h1>
        <ScanbotScanner />
      </div>
    </>
  )
}

export default App
