"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (_req, res = express_1.response) => {
    const { correo, password } = _req.body;
    console.log(correo, password);
    try {
        //ver usuario
        //verificar contraseña
        //generar Token
        res.json({
            msg: "probando"
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Error :C"
        });
    }
};
const crearJWTToken = (usuario) => {
    return jsonwebtoken_1.default.sign({ usuario }, "probando");
};
module.exports = {
    login,
    crearJWTToken
};
