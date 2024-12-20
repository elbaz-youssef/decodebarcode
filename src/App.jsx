

import './App.css'
import ScanbotScanner from './components/Html5QrCode/ScanbotScanner'
import ZxingScanner from './components/ZxingScanner/ZxingScanner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>Scanbot Barcode Scanner</h1> */}
        {/* <ScanbotScanner /> */}
        <h1>Zxing Scanner</h1>
        <ZxingScanner />
        
      </div>
    </>
  )
}

export default App
