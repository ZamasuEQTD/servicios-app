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
exports.getUsuarioPorId = exports.getUsuarios = void 0;
const graphql_1 = require("graphql");
const typeDefs_1 = require("./typeDefs");
const Usuario = require("../DB/models/user.model");
exports.getUsuarios = {
    name: "usuarios",
    type: new graphql_1.GraphQLList(typeDefs_1.usuarioType),
    resolve: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield Usuario.find();
    })
};
exports.getUsuarioPorId = {
    type: typeDefs_1.usuarioType,
    args: {
        id: {
            type: graphql_1.GraphQLString
        }
    },
    resolve: (_, args) => {
        return Usuario.findById(args.id);
    }
};
