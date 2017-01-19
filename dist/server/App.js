"use strict";
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Promise = require("bluebird");
const Hello_1 = require("./routes/Hello");
//Print stack trace with TS lines numbers
require("source-map-support/register");
//TODO delete
var hola;
(function (hola) {
    hola[hola["MKIO"] = 0] = "MKIO";
    hola[hola["HOLA"] = 1] = "HOLA";
    hola[hola["MIJO"] = 2] = "MIJO";
})(hola || (hola = {}));
const MyStringEnum = {
    Member1: "member1",
    Member2: "member2"
};
class MyClass {
    set(param) {
        this.attr = param;
    }
    greatting() {
        return new Promise((resolve, reject) => {
            resolve(MyStringEnum.Member1);
        });
    }
}
let myClass = new MyClass();
myClass.set(MyStringEnum.Member1);
myClass.attr;
console.log(myClass.attr, hola.MIJO);
//TODO end delete
const app = express();
app.use(express.static('./'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/hello', Hello_1.default); //'/hello', );
app.use((req, res) => {
    res.sendFile(path.resolve('index.html'));
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=App.js.map