module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  "rules": {
    "no-console": 0,
    "class-methods-use-this": 0,
    "max-len": [
        "error",
        { 
            "code": 100,
            "tabWidth": 4,
            "ignoreComments": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true 
        }
    ]
  }
};
