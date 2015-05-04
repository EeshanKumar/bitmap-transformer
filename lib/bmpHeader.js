'use strict';

function isCorrectFileType(bmpBuffer) {
	if (bmpBuffer.toString('utf-8', 0, 2) === 'BM') {
		return true; 
	} else {return false;}
}

function getNumOfPaletteColors(bmpBuffer) {
	return bmpBuffer.readUInt32LE(46);
}

function getPixelStart(bmpBuffer) {
	return bmpBuffer.readUInt32LE(10);
}

function getImageWidth(bmpBuffer) {
	return bmpBuffer.readUInt32LE(18);
}

function getImageHeight(bmpBuffer) {
	return bmpBuffer.readUInt32LE(22);
}

exports.isCorrectFileType = isCorrectFileType;
exports.getNumOfPaletteColors = getNumOfPaletteColors;
exports.getPixelStart = getPixelStart;
exports.getImageWidth = getImageWidth;
exports.getImageHeight = getImageHeight;