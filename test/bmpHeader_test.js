'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var bmpFile = './test/test.bmp';
var bmpBuffer = fs.readFileSync(bmpFile);
var bmpHeader = require('../lib/bmpHeader');

describe('bmpHeader.js', function() {

  it('should validate the right file is used', function() {
    expect(bmpHeader.isCorrectFileType(bmpBuffer)).to.eql(true);
  });

  it('should return the start of pixel data', function() {
    expect(bmpHeader.getPixelStart(bmpBuffer)).to.eql(1078);
  });

  it('should get bmp file width', function() {
    expect(bmpHeader.getImageWidth(bmpBuffer)).to.eql(100);
  });

  it('should get bmp file height', function() {
    expect(bmpHeader.getImageHeight(bmpBuffer)).to.eql(100);
  });

});

