"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_1 = __importDefault(require("./models/conexion"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuramos las variables de entorno o ambiente
dotenv_1.default.config();
const server = new conexion_1.default();
