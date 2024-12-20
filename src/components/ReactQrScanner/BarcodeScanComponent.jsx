import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const BarcodeScanComponent = () => {
  const [scannedResult, setScannedResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedResult(data.text); // Set the result of the scan
    }
  };

  const handleError = (error) => {
    console.error(error); // Handle any error during scanning
  };

  return (
    <div>
      <QrScanner delay={300} onScan={handleScan} onError={handleError} />
      <p>Scanned Barcode: {scannedResult}</p>
    </div>
  );
};

export default BarcodeScanComponent;
