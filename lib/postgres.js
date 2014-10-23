'use strict';

var pg = require('pg');
var fmt = require('util').format;

function execute(query, opts, done) {
  pg.connect(opts, function(err, client) {
    if (err) {
      pg.end();
      return done(err);
    }

    return client.query(query, function(err) {
      client.end();
      done(err);
    });
  });
}

module.exports = function (opts) {
  return {
    create: function (name, done) {
      execute(fmt('CREATE DATABASE "%s";', name), opts, done);
    },
    drop: function (name, done) {
      execute(fmt('DROP DATABASE IF EXISTS "%s";', name), opts, done);
    }
  };
};
