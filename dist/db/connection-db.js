"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('productos', 'root', 'Derbes89@', {
    host: '192.168.1.148',
    port: 3306,
    dialect: 'mysql',
});
exports.default = sequelize;
