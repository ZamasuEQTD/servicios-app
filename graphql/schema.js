"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("./queries");
const mutation_1 = require("./mutation");
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "holi",
    fields: {
        getUsuarios: queries_1.getUsuarios,
        getUsuarioPorId: queries_1.getUsuarioPorId
    }
});
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    fields: {
        registrarUsuario: mutation_1.registrarUsuario,
        login: mutation_1.login
    }
});
const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
module.exports = schema;
