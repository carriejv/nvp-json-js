/*!
 * nvp-json
 * Copyright(c) 20018 Carrie Vrtis
 * MIT Licensed
 */

const nvpjson = require('../index.js');
require('chai').should();

const testString = 'KEY=VALUE&AWFUL[4]==&&=&TERRIBLE[18]= &= HELLOWORLD[2]=&NORMAL=DATA';
let testObj;

describe('nvp-json', () => {
  describe('#toJSON', () => {
    it('should produce a valid Javascript object from a valid NVP string', () => {
      testObj = nvpjson.toJSON(testString);
      testObj.KEY.should.equal('VALUE');
      testObj.AWFUL.should.equal('=&&=');
      testObj.TERRIBLE.should.equal(' &= HELLOWORLD[2]=');
      testObj.NORMAL.should.equal('DATA');
    });
  });

  describe('#toNVP', () => {
    it('should produce a valid NVP string from a valid Javascript object', () => {
      const testNVP = nvpjson.toNVP(testObj);
      testNVP.should.equal(testString);
    });
  });
});
