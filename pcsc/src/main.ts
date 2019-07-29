const NfcpyId = require('node-nfcpy-id').default;
const nfc = new NfcpyId( {mode: 'non-touchend'} ).start();

console.log( 'started' );

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
});
 
nfc.on('error', (err) => {
  console.error('\u001b[31m', err, '\u001b[0m');
});
