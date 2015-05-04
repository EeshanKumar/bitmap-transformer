'use strict';

//Require fs and transform libraries
var fs = require('fs');
var transformHandle = {};
transformHandle.invertPaletteColors = require('./lib/invertPaletteColors');
transformHandle.randomizePaletteColors = require('./lib/randomizePaletteColors');
transformHandle.randomizePixels = require('./lib/randomizePixels');

//Define new and old bmp files
var bmpFile = './tmp/test.bmp';
var bmpFileNew = './tmp/testTransformed.bmp';

//Read in bitmap file
var bmpBuffer = fs.readFileSync(bmpFile);

if (process.argv.length > 2) {
	//Run callback functions specified by user
	for (var i = 2; i < process.argv.length; i++) {
		if (transformHandle[process.argv[i]]) {
			//Transform via library function
			bmpBuffer = transformHandle[process.argv[i]](bmpBuffer);
		} else {
			//Transform via user inputed callback
			bmpBuffer = process.argv[i](bmpBuffer);
		}
	}
} else {
	//Use default transform
	bmpBuffer = transformHandle.invertPaletteColors(bmpBuffer);
	bmpBuffer = transformHandle.randomizePaletteColors(bmpBuffer);
	bmpBuffer = transformHandle.randomizePixels(bmpBuffer);
}

//Write new bitmap file if no errors
if (bmpBuffer.error) {
	console.log(bmpBuffer.error);
} else {fs.writeFile(bmpFileNew, bmpBuffer);}
