'use strict';

module.exports = function (opts) {
  var dialect = opts && opts.dialect || 'postgres';
  var provider;

  switch(dialect) {
    case 'postgres':
      provider = require('./lib/postgres');
      break;
    case 'mysql':
      provider = require('./lib/mysql');
      break;
    default:
      throw new Error('Dialect: ' + dialect + ' is not supported for now. Sorry ;(');
  }

  return provider(opts);
};