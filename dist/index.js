"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propertiesLoader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _properties = _interopRequireDefault(require("properties"));

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function propertiesLoader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = (0, _loaderUtils.getOptions)(this) || {};
  (0, _schemaUtils.default)(_options.default, options, 'Properties Loader');
  const callback = this.async();

  _properties.default.parse(source, options, (err, result = {}) => {
    const json = JSON.stringify(result).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    callback(err, `export default ${json}`);
  });
}