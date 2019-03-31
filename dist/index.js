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
  const options = (0, _loaderUtils.getOptions)(this) || {};
  (0, _schemaUtils.default)(_options.default, options, 'Properties Loader');
  const isFlatten = options.style === 'flatten';

  const obj = _properties.default.parse(source, {});

  const json = JSON.stringify(obj).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  return `export default ${json}`;
}