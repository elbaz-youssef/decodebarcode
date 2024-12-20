import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const ScanbotScanner = () => {
  const [scannedResult, setScannedResult] = useState('');
  const qrCodeRegionId = "qr-reader";
  const scannerRef = useRef(null);

  // Function to handle the success result of scanning
  const handleScanSuccess = (decodedText, decodedResult) => {
    setScannedResult(decodedText);  // Update state with scanned result
    alert(`Scanned Result: ${decodedText}`, decodedResult);
    scannerRef.current.stop();  // Stop the scanner once result is found
  };

  // Function to handle the error during scanning
  const handleScanError = (error) => {
    console.error('Scan Error:', error);
  };

  // Initialize the scanner when the component is mounted
  const startScan = () => {
    const scanner = new Html5QrcodeScanner(
      qrCodeRegionId,
      {
        fps: 10, // Frame rate for scanning
        qrbox: 250, // Define the QR code scanning box size
        disableFlip: false, // If true, disables flipping of camera
      },
      true
    );

    scannerRef.current = scanner;  // Save the scanner reference
    scanner.render(handleScanSuccess, handleScanError);
    console.log("we are scanning");
  }

  // useEffect(() => {
  //   const scanner = new Html5QrcodeScanner(
  //     qrCodeRegionId,
  //     {
  //       fps: 10, // Frame rate for scanning
  //       qrbox: 250, // Define the QR code scanning box size
  //       disableFlip: false, // If true, disables flipping of camera
  //     },
  //     true
  //   );

  //   scannerRef.current = scanner;  // Save the scanner reference
  //   scanner.render(handleScanSuccess, handleScanError);
  //   console.log("we are scanning");
  //   // Cleanup when the component is unmounted
  //   return () => {
  //     scanner.clear();
  //   };
  // }, []);


  return (
    <div>
      <h2>Barcode Scanner</h2>
      
      {/* Show video feed only if no result has been scanned */}
      {scannedResult? (
        <div>
          <h3>Scanned Result:</h3>
          <p>{scannedResult}</p>
          {/* <button onClick={() => setScannedResult('')} id="start scan">Start Scan</button> */}
        </div>
      ) : (
        <>
          <div id={qrCodeRegionId} style={{ width: '100%', height: '400px' }}></div>
          <button onClick={() => startScan}>Start Scan</button>
        </>
      )}
    </div>
  );
};

export default ScanbotScanner;
