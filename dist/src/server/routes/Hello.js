"use strict";
const express = require("express");
const hello = express.Router();
hello.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World!'
    });
});
hello.get('/test', (req, res, next) => {
    res.send('test');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hello;
//# sourceMappingURL=Hello.js.map