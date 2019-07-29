const NfcpyId = require('node-nfcpy-id').default;
const nfc = new NfcpyId();

console.log( 'start...' );
nfc.start();

nfc.on('touchstart', (card) => {
  console.log('Card ID: ' + card.id);
 
  // card.type is the same value as that of nfcpy.
  // 2: Mifare
  // 3: FeliCa
  // 4: Mifare (DESFire)
  console.log('Card Type: ' + card.type);
  
});
 
// If the `mode` is `loop` or `non-loop`, event will occur when the card is removed
nfc.on('touchend', () => {
  console.log('Card was away.');
  nfc.start();
});
 
nfc.on('error', (err) => {
    console.log( 'ouch' )
  console.error('\u001b[31m', err, '\u001b[0m');
});
