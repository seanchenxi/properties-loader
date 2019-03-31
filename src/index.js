import { getOptions } from 'loader-utils';

import validateOptions from 'schema-utils';

import Properties from 'properties';

import schema from './options.json';

export default function propertiesLoader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'Properties Loader');

  const isFlatten = options.style === 'flatten';

  const obj = Properties.parse(source, {});
  const json = JSON.stringify(obj)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `export default ${json}`;
}
