"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nfc_pcsc_1 = require("nfc-pcsc");
console.log('start');
const nfc = new nfc_pcsc_1.NFC();
console.log(nfc);
console.log(`${reader.reader.name}  device attached`);
nfc.on('reader', reader => {
    console.log(`${reader.reader.name}  device attached`);
    reader.on('card', card => {
        console.log(`${reader.reader.name}  card detected`, card);
    });
    reader.on('card.off', card => {
        console.log(`${reader.reader.name}  card removed`, card);
    });
    reader.on('error', err => {
        console.log(`${reader.reader.name}  an error occurred`, err);
    });
    reader.on('end', () => {
        console.log(`${reader.reader.name}  device removed`);
    });
});
nfc.on('error', err => {
    console.log('an error occurred', err);
});
//# sourceMappingURL=main.js.map