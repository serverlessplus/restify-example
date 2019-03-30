'use strict';

const app = require('./app');
const serverlessplus = require('serverlessplus');

const options = {
    framework: 'restify',
};
const proxy = serverlessplus.createProxy(app, options);

exports.main_handler = (event, context) => {
    return proxy.serveRequest(event, context);
}
