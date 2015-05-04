'use strict';

var bmpHeader = require('./bmpHeader');

module.exports = exports = function(bmpBuffer) {

	if (!(bmpHeader.isCorrectFileType(bmpBuffer))) {
		bmpBuffer.error = 'Incorrect file type';
	}

	var paletteStart = 54;
	var numOfPaletteColors = bmpHeader.getNumOfPaletteColors(bmpBuffer);
	var paletteEnd = paletteStart + (4 * numOfPaletteColors);

	for (var i = paletteStart; i < paletteEnd; i += 4) {

		//Write out random palette color values
		bmpBuffer.writeUInt8(randomColorValue(), i); //r
		bmpBuffer.writeUInt8(randomColorValue(), i + 1); //g
		bmpBuffer.writeUInt8(randomColorValue(), i + 2); //b
		// bmpBuffer.writeUInt8(randomColorValue(), i + 3); //a
		
	}
	return bmpBuffer;
};

function randomColorValue() {
	return Math.floor(Math.random() * (255));
}