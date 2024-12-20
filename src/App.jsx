

import './App.css'
// import ScanbotScanner from './components/Html5QrCode/ScanbotScanner'
import BarcodeScanComponent from './components/ReactBarCodeScanner/BarcodeScanComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Scanbot Barcode Scanner</h1>
        {/* <ScanbotScanner /> */}
        <BarcodeScanComponent />
      </div>
    </>
  )
}

export default App
