# nvp-json

[![npm version](https://img.shields.io/npm/v/nvp-json.svg)](https://www.npmjs.com/package/nvp-json) [![Build Status](https://img.shields.io/travis/carriejv/nvp-json-js.svg)](https://travis-ci.org/carriejv/nvp-json-js) [![npm downloads](https://img.shields.io/npm/dt/nvp-json.svg)](https://www.npmjs.com/package/nvp-json) [![Codacy Coverage](https://api.codacy.com/project/badge/Coverage/62203b9587e7431b90a034ac7bd94de3)](https://www.codacy.com/app/carriejv/nvp-json-js?utm_source=github.com&utm_medium=referral&utm_content=carriejv/nvp-json-js&utm_campaign=Badge_Coverage)


[![dependencies](https://img.shields.io/david/carriejv/nvp-json-js.svg)](https://david-dm.org/carriejv/nvp-json-js) [![Build Status](https://github.com/carriejv/nvp-json-js/workflows/ci-build/badge.svg?branch=master)](https://github.com/carriejv/nvp-json-js/actions?query=workflow%3Aci-build) [![GitKraken](https://img.shields.io/badge/<3-GitKraken-green.svg)](https://www.gitkraken.com/invite/om4Du5zG)

A bi-directional NVP-JSON parser, for use with [PayPal's NVP APIs](https://developer.paypal.com/reference/?mark=endpoints).

Tested with Node >= 6 LTS.

## Installation

`npm install nvp-json`

or

`yarn add nvp-json`

## Usage

```javascript
const nvpjson = require('nvp-json');
let nvpString = 'KEY=VALUE&ESCAPED[5]=& [1]=';

let json = nvpjson.toJSON(nvpString);

/*
 * {KEY: 'VALUE', ESCAPED: '& [1]='}
 */

let nvp = nvpjson.toNVP({
    KEY: 'VALUE',
    ESCAPED: '& [1]='
});

/*
 * KEY=VALUE&ESCAPED[5]=& [1]=
 */
```

## License

[MIT](https://github.com/carriejv/nvp-json/blob/master/LICENSE)