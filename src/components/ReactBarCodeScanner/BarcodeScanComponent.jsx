import React, { useState } from 'react';
import { BarcodeScanner } from 'react-qr-barcode-scanner';

const BarcodeScanComponent = () => {
  const [scanData, setScanData] = useState('');

  const handleScan = (data) => {
    setScanData(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <BarcodeScanner onScan={handleScan} onError={handleError} />
      <p>Scanned data: {scanData}</p>
    </div>
  );
};

export default BarcodeScanComponent;
