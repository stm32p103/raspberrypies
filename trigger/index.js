const http = require( 'http' );
const spawn = require('child_process').spawn;
const header = { 'Content-Type': 'text/plain' };

// git pullする。spawnは spawn( 'git pull' )してはならない。エラーになる。
function executePull() {
	const prc = spawn( 'git', [ 'pull' ] );
	prc.stdout.setEncoding( 'utf8' );
	prc.stderr.setEncoding( 'utf8' );
	
	return new Promise( ( resolve, reject ) => {
		prc.once( 'exit', code => { 
			resolve( code );
		} );
		prc.once( 'error', err => { 
			reject( err )
		} );
	} );
}

const app = http.createServer( ( req, res ) => {
	let message = '';
	
	executePull().then( ( code ) => {
		// 成功した場合
		res.writeHead( 200, header );
		message = `Pull succeeded. (code:${code})`;
	} ).catch( ( err ) => {
		// 失敗した場合
		res.writeHead( 405, header );
		message = `Pull failed. (code:${err})`;
	} ).finally( () => {
		console.log( message );
		// 応答を返す
		res.write( message );
		res.end();
	} );
} );

// ポートは適当に変える
app.listen( 4000 );