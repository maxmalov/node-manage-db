'use strict';

module.exports = function (dialect, opts) {
  switch(dialect) {
    case 'postgres':
      return require('./lib/postgres')(opts);
    default:
      throw new Error('Dialect: ' + dialect + ' is not supported for now. Sorry ;(');
  }
};