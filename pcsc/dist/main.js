const NfcpyId = require('node-nfcpy-id').default;
const nfc = new NfcpyId();
console.log('start...');
nfc.start();
nfc.on('touchstart', (card) => {
    console.log('Card ID: ' + card.id);
    console.log('Card Type: ' + card.type);
});
nfc.on('touchend', () => {
    console.log('Card was away.');
    nfc.start();
});
nfc.on('error', (err) => {
    console.log('ouch');
    console.error('\u001b[31m', err, '\u001b[0m');
    console.log('----------------------------');
    let timer = setInterval(() => {
        try {
            console.log(nfc.start());
            console.log('recovered');
            clearInterval(timer);
        }
        catch (err) {
            console.log(err);
        }
    }, 1000);
});
//# sourceMappingURL=main.js.map