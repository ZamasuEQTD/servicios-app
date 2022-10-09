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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Usuario = require("../DB/models/user.model");
const { crearJWTToken } = require("../controllers/auth");
exports.resolvers = {
    Query: {
        getUsuarios: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Usuario.find().select("-password");
        }),
        getUsuarioPorId: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return Usuario.findById(args.id);
        })
    },
    Mutation: {
        registrarUsuario: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(args);
            const { nombre, sobreMi, password, email, apellido } = args;
            const nuevoUsuario = new Usuario({ nombre, sobreMi, password, email, apellido });
            yield nuevoUsuario.save();
            return crearJWTToken(nuevoUsuario);
        }),
        login: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = args;
            // await Usuario.find
            const usuario = yield Usuario.findOne({
                email
            });
            if (!usuario || password != usuario.password) {
                throw new Error("Datos no coincidentes");
            }
            return crearJWTToken(usuario);
        })
    }
};
