'use strict';

const restify = require('restify');

const server = restify.createServer();

server.get('/restify-example', function (request, response, next) {
    response.send('hello world');
    return next();
});

module.exports = server;
