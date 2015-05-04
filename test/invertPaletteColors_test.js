'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var bmpFile = './test/test.bmp';
var bmpBuffer = fs.readFileSync(bmpFile);
var bmpFileToTransform = './test/testToTransform.bmp';
var transformedBuffer = fs.readFileSync(bmpFileToTransform);
var invertPaletteColors = require('../lib/invertPaletteColors');

describe('invertPaletteColors.js', function() {
  
  beforeEach(function() {
    transformedBuffer = invertPaletteColors(transformedBuffer);
  });

  it('should invert the colors', function() {
    expect(bmpBuffer.readUInt8(102)).to.eql(255 - transformedBuffer.readUInt8(102));
  });

});

