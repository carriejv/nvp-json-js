# nvp-json

[![npm version](https://img.shields.io/npm/v/nvp-json.svg)](https://www.npmjs.com/package/nvp-json) [![Build Status](https://img.shields.io/travis/carriejv/nvp-json-js.svg)](https://travis-ci.org/carriejv/nvp-json-js) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/9065cebcf7384259bac3bce3d502d97e)](https://www.codacy.com/app/carriejv/nvp-json-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=carriejv/nvp-json-js&amp;utm_campaign=Badge_Grade) [![Code Coverage](https://img.shields.io/codacy/coverage/nvp-json-js.svg)](https://app.codacy.com/app/carriejv/nvp-json-js)


[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/carriejv) [![GitKraken](https://img.shields.io/badge/<3-GitKraken-green.svg)](https://www.gitkraken.com/invite/om4Du5zG) [![dependencies](https://img.shields.io/david/carriejv/nvp-json-js.svg)](https://david-dm.org/carriejv/nvp-json-js) [![devDependencies](https://img.shields.io/david/dev/carriejv/nvp-json-js.svg)](https://david-dm.org/carriejv/nvp-json-js#info=devDependencies)

A bi-directional NVP-JSON parser, for use with [PayPal's NVP APIs](https://developer.paypal.com/reference/?mark=endpoints).

Tested with Node `6.0+`.

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