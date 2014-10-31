'use strict';

var join = require('path').join;

module.exports = function (opts) {
  var dialect = opts && opts.dialect || 'postgres';
  var provider;

  try {
    provider = require(join('./lib', dialect));
  } catch (e) {
    throw new Error('Dialect: ' + dialect + ' is not supported for now. Sorry ;(');
  }

  return provider(opts);
};
