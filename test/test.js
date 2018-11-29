/*!
 * nvp-json
 * Copyright(c) 20018 Carrie Vrtis
 * MIT Licensed
 */


'use strict';

const nvpjson = require('../index.js');
const chai = require('chai');
const should = chai.should();

let testString = 'KEY=VALUE&AWFUL[4]==&&=&TERRIBLE[18]= &= HELLOWORLD[2]=&NORMAL=DATA';
let testObj;

describe('nvp-json', function() {

	describe('#toJSON', function() {

		it('should produce a valid Javascript object from a valid NVP string', function() {

            testObj = nvpjson.toJSON(testString);
            testObj.KEY.should.equal('VALUE');
            testObj.AWFUL.should.equal('=&&=');
            testObj.TERRIBLE.should.equal(' &= HELLOWORLD[2]=');
            testObj.NORMAL.should.equal('DATA');

        });

    });

	describe('#toNVP', function() {

		it('should produce a valid NVP string from a valid Javascript object', function() {

            let testNVP = nvpjson.toNVP(testObj);
            testNVP.should.equal(testString);

        });

    });

});