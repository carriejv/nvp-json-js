/*!
 * nvp-json
 * Copyright(c) 2018 Carrie Vrtis
 * MIT Licensed
 */


/**
 * Converts a valid Javascript object to an NVP string.
 *
 * @api public
 * @param {Object|String} [data] - A valid Javascript object or JSON string.
 * @returns {String} - An NVP-formatted string containing the JSON data.
 */
const toNVP = function (data) {
  const json = JSON.parse(JSON.stringify(data));
  let res = '';
  for (const k of Object.keys(json)) {
    res += `${(res ? '&' : '')}${k.toUpperCase()}${json[k].includes('&') | json[k].includes('=') ? `[${json[k].length}]` : ''}=${json[k]}`;
  }
  return res;
};

/**
 * Converts a valid NVP string to an Javascript object.
 *
 * @api public
 * @param {String} [data] - A valid NVP string.
 * @returns {Object} - An Javascript object containing the NVP data.
 */
const toJSON = function (data) {
  const res = {};
  const pairs = [];
  const ignore = {};
  let search;
  let regexSearchIndex = 0;
  while ((search = data.slice(regexSearchIndex).search(/\[[0-9]+\]=/)) !== -1) {
    const val = parseInt(data.substring(search + regexSearchIndex + 1, data.indexOf(']', search + regexSearchIndex)));
    ignore[search + regexSearchIndex] = val;
    data = data.slice(0, regexSearchIndex) + data.slice(regexSearchIndex).replace(/\[[0-9]+\]=/, '='); // Remove first remaining (current) instance from data.
    regexSearchIndex += search + val;
  }
  let lastPair = -1;
  for (let i = 0; i < data.length; i++) {
    if (ignore[i]) {
      i += ignore[i];
      continue;
    }
    if (data.charAt(i) === '&') {
      pairs.push(data.substring(lastPair + 1, i));
      lastPair = i;
    }
  }
  pairs.push(data.substring(lastPair + 1)); // Add in last pair.
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split(/=(.+)/);
    res[pair[0]] = pair[1];
  }
  return res;
};

module.exports = {
  toNVP,
  toJSON,
};
