import { getOptions } from 'loader-utils';

import validateOptions from 'schema-utils';

import Properties from 'properties';

import schema from './options.json';

export default function propertiesLoader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = getOptions(this) || {};
  validateOptions(schema, options, 'Properties Loader');

  const callback = this.async();
  Properties.parse(source, options, (err, result = {}) => {
    const json = JSON.stringify(result)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
    callback(err, `export default ${json}`);
  });
}
