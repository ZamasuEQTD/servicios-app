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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../DB/models/user.model");
const userGet = (req, res = response) => {
    const { name } = req.body;
    res.json({
        msg: "get-controller",
        name
    });
};
const userPut = (req, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const _a = req.body, { password, google } = _a, restBody = __rest(_a, ["password", "google"]);
    if (password) {
        const salt = bcryptjs.genSaltSync();
        restBody.password = bcryptjs.hashSync(password, salt);
    }
    const userDB = yield Usuario.findByIdAndUpdate(id, restBody);
    res.json({
        msg: "put -controller",
        id: userDB.id
    });
});
const userPost = (_req, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    // const {name,mail,rol,password} = req.body
    const usuario = new Usuario({ name: "franco", mail: "franco2015gaby71@gmail.com", password: "414141" });
    //ver mail existe
    // const mailExits = await Usuario.findOne({mail})
    // if(mailExits){
    //     return res.status(400).json({
    //         error:"Mail Ya está registrado"
    //     })
    // }
    //encriptar password
    // const salt = bcryptjs.genSaltSync()
    // usuario.password = bcryptjs.hashSync(password,salt)
    yield usuario.save();
    res.json({
        usuario
    });
});
const userDelete = (_req, res = response) => {
    res.json({
        msg: "delete -controller"
    });
};
module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
};
