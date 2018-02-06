import { curry } from 'lodash';
const immutable = require('object-path-immutable');

export const immutablySet = curry(function (path: string | string[], value: any, obj: any) {
  return immutable.set(obj, path, value);
});
