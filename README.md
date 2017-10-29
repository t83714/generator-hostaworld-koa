# generator-hostaworld-koa [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Koa applicatiion starter template generator built on top of [Yeoman](http://yeoman.io).

## Packages & Options

I built this Koa starter kit for my own projects and it packages with the following packages:

* [Koa v2](https://github.com/koajs/koa)
* [@std/esm](https://github.com/standard-things/esm) : Enable ES modules in Node 4+ 
* [koa-compress](https://github.com/koajs/compress): Compress middleware for Koa
* [koa-logger](https://github.com/koajs/logger): Development style logger middleware for koa
* [koa-route](https://github.com/koajs/route): a simple route middleware for koa
* [koa-static](https://github.com/koajs/static): Koa static file serving middleware
* [ejb](http://ejs.co/): A simple templating language that lets you generate HTML markup with plain JavaScript.
* [co-views](https://github.com/tj/co-views): Template rendering for co using co-render. This module provides functionality such as specifying a views directory and default extension name.
* [co-body](https://github.com/cojs/co-body): Parse request bodies with co. **Optional. Default to install**
* [koa-instant-theme](https://github.com/t83714/koa-instant-theme): A pre-packaged frontend theme pack. **Optional. Default to not install**
* [request](https://github.com/request/request) & [request-promise](https://github.com/request/request-promise): The simplified HTTP request client 'request' with Promise support. Powered by Bluebird. **Optional. Default to install**
* [mysql2](https://github.com/sidorares/node-mysql2) & [mysql2-promise](https://github.com/namshi/node-mysql2-promise): MySQL client for Node.js with focus on performance. **Optional. Default to install** You have chance to specify the DB coonfiguration (username & password etc.)

**The starte kit is configurable and you can choose to leave some of the packages during the installation.**

## Prerequisites

* [Node.js](https://nodejs.org/en/) (Version 8.4.0 and up is required)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-hostaworld-koa using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-hostaworld-koa
```

Then to go the project folder:

```bash
yo hostaworld-koa
```

After the instllation, you can start the local web server by:

```bash
npm start
```

## License

MIT © [Jacky Jiang](https://github.com/t83714)


[npm-image]: https://badge.fury.io/js/generator-hostaworld-koa.svg
[npm-url]: https://npmjs.org/package/generator-hostaworld-koa
[travis-image]: https://travis-ci.org/t83714/generator-hostaworld-koa.svg?branch=master
[travis-url]: https://travis-ci.org/t83714/generator-hostaworld-koa
[daviddm-image]: https://david-dm.org/t83714/generator-hostaworld-koa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/t83714/generator-hostaworld-koa
[coveralls-image]: https://coveralls.io/repos/t83714/generator-hostaworld-koa/badge.svg
[coveralls-url]: https://coveralls.io/r/t83714/generator-hostaworld-koa
