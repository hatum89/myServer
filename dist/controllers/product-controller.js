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
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getOneProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.default.findAll();
    resp.json({
        listProducts,
        message: 'get products'
    });
});
exports.getProducts = getProducts;
const getOneProduct = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const productOne = yield product_1.default.findByPk(id);
    if (productOne) {
        resp.json(productOne);
    }
    else {
        resp.status(404).json({
            message: `No existe el producto con la id = ${id}`
        });
    }
});
exports.getOneProduct = getOneProduct;
const deleteProduct = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const productOne = yield product_1.default.findByPk(id);
    if (!productOne) {
        resp.status(404).json({
            message: `No existe el producto con la id = ${id}`
        });
    }
    else {
        yield productOne.destroy();
        resp.json({
            message: `el producto con la id = ${id} ha sido eliminado`
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const productBody = yield product_1.default.create(body);
        resp.json({
            message: 'Producto agregado con exito',
            body
        });
    }
    catch (error) {
        console.log(error);
        resp.json({
            message: 'Upps ocurrio un error comunicarse con soporte',
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const productUpdate = yield product_1.default.findByPk(id);
    try {
        if (productUpdate) {
            productUpdate.update(body);
            resp.json({
                message: 'El producto fue actualizado con exito',
                body
            });
        }
        else {
            resp.status(404).json({
                message: `el producto con la id = ${id} no se ha actualizado`
            });
        }
    }
    catch (error) {
        console.log(error);
        resp.json({
            message: 'Upps ocurrio un error comunicarse con soporte',
        });
    }
});
exports.updateProduct = updateProduct;
