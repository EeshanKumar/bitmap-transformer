'use strict';

var bmpHeader = require('./bmpHeader');

module.exports = exports = function(bmpBuffer) {

	if (!(bmpHeader.isCorrectFileType(bmpBuffer))) {
		bmpBuffer.error = 'Incorrect file type';
	}

	var pixelStart = bmpHeader.getPixelStart(bmpBuffer);
	var imageWidth = bmpHeader.getImageWidth(bmpBuffer);
	var imageHeight = bmpHeader.getImageHeight(bmpBuffer);
	var pixelEnd = pixelStart + (imageWidth * imageHeight);

	for (var i = pixelStart; i < pixelEnd; i++) {
		//Write out random palette value
		bmpBuffer.writeUInt8(randomPaletteValue(), i);
	}
	return bmpBuffer;
};

function randomPaletteValue() {
	return Math.floor(Math.random() * (255));
}