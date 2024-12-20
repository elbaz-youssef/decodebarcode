import { BrowserMultiFormatReader } from '@zxing/library';
const ZxingScanner = () => {

    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromInputVideoDevice(null, 'video').then((result) => {
        console.log(result.getText()); // Decoded result
    }).catch((err) => {
        console.error(err);
    });

}

export default ZxingScanner;