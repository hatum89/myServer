"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("../routes/product-route"));
const connection_db_1 = __importDefault(require("../db/connection-db"));
// console.log(db);
class conexion {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.parserMethod();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('la aplicacion esta corriendo en el puerto', this.port);
        });
    }
    routes() {
        this.app.get('/', (req, resp) => {
            resp.json({
                message: 'Api Working'
            });
        });
        this.app.use('/api/products', product_route_1.default);
    }
    parserMethod() {
        // parseamos el body
        this.app.use(express_1.default.json());
        //cors 
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_db_1.default.authenticate();
                console.log('Conexion exitosa.');
            }
            catch (error) {
                console.error('Falla en la conexion:', error);
            }
        });
    }
}
exports.default = conexion;
