Manage databases with NodeJS
============================

## Installation

```
npm i manage-database
```

## Usage

Module exports a provider function for database manager.

```
var createDbManager = require('manage-database');

var dbManager = createDbManager({
  user: 'username',
  password: 'password',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
});

// create database
dbMgr.create('database_name', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('database created');
});

// drop database
dbMgr.drop('database_name', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('database deleted');
});
```

### Options

###### {string} opts.user

User name in the database

###### {string=} opts.password

User password in the database

###### {string=}[host='127.0.0.1'] opts.host

The host name or ip where database server is available

###### {number=} opts.port

The port where database server is available

###### {string} opts.dialect

Database dialect. Available options are `postgres`, `mysql`. By default it is `mysql`.

## License

The MIT License (MIT)

Copyright (c) 2014 Maxim Malov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
