'use strict';

var mysql = require('mysql');
var fmt = require('util').format;

function execute(query, opts, done) {
  try {
    var conn = mysql.createConnection(opts);
    conn.connect();
    conn.query(query, function (err) {
      done(err);
    });
    conn.end();
  } catch (err) {
    done(err);
  }
}

module.exports = function (opts) {
  return {
    create: function (name, done) {
      execute(fmt('CREATE DATABASE IF NOT EXISTS `%s`;', name), opts, done);
    },
    drop: function (name, done) {
      execute(fmt('DROP DATABASE IF EXISTS `%s`;', name), opts, done);
    }
  };
};
