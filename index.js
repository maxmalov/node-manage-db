'use strict';

var join = require('path').join;
var P = require('bluebird');

var DIALECTS = ['postgres', 'mysql'];

module.exports = function (opts) {
  var dialect = opts && opts.dialect || 'mysql';
  var provider;

  if (DIALECTS.indexOf(dialect) === -1) {
    throw new Error('Dialect: ' + dialect + ' is not supported for now. Sorry ;(');
  }

  provider = require('./' + join('lib', dialect));

  return P.promisifyAll(provider(opts));
};
