'use strict';

var bmpHeader = require('./bmpHeader');

module.exports = exports = function(bmpBuffer) {

	if (!(bmpHeader.isCorrectFileType(bmpBuffer))) {
		bmpBuffer.error = 'Incorrect file type';
	}

	var paletteStart = 54;
	var paletteEnd = paletteStart + bmpHeader.getNumOfPaletteColors(bmpBuffer);

	for (var i = paletteStart; i < paletteEnd; i += 4) {
		//Read in palette color values
		var r = bmpBuffer.readUInt8(i);
		var g = bmpBuffer.readUInt8(i + 1);
		var b = bmpBuffer.readUInt8(i + 2);
		var a = bmpBuffer.readUInt8(i + 3);

		//Transform palette color values
		r = invertColor(r);
		g = invertColor(g);
		b = invertColor(b);

		//Write out palette color values back in buffer
		bmpBuffer.writeUInt8(r, i);
		bmpBuffer.writeUInt8(g, i + 1);
		bmpBuffer.writeUInt8(b, i + 2);
		bmpBuffer.writeUInt8(a, i + 3);
	}
	return bmpBuffer;
};

function invertColor(value) {
	return 255-value;
}