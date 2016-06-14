var Printer = require( 'node-printer' ),
	imagesnap = require( 'imagesnap' ),
	fs = require( 'fs' );

var options = {
	media: 'Custom.72x50mm'
	// o: 'DocCutType=0NoCutDoc'
}

var printer = new Printer( 'Thermal_Printer' );

function snap() {
	imagesnap.captureToBuffer( 'Logitech Webcam C930e', function( data ) {
		printer.printBuffer( data, options );
		console.log( 'SNAP!' );
	} );

	var delay = ( 10000 + ( Math.random() * 30000 ) );
	setTimeout( snap, delay );
	console.log( "See you in " + ( delay / 1000 ) + " seconds..." );
}

snap();
