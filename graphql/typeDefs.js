"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.usuarioType = void 0;
const graphql_1 = require("graphql");
const apollo_server_express_1 = require("apollo-server-express");
exports.usuarioType = new graphql_1.GraphQLObjectType({
    name: "TipoUsuario",
    fields: {
        id: { type: graphql_1.GraphQLString },
        nombre: { type: graphql_1.GraphQLString },
        apellido: { type: graphql_1.GraphQLString },
        sobreMi: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    }
});
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type usuarioType {
        id:String
        nombre:String
        apellido:String
        sobreMi:String
        email:String
    }
    type usuarioPerfilType {
        nombre:String
        apellido:String
        sobreMi:String
    }
    type Query {
        getUsuarios:[usuarioType],
        getUsuarioPorId(id:String): usuarioPerfilType   
    }
    type Mutation {
        registrarUsuario( nombre: String apellido: String sobreMi: String email: String password: String):String,
        login(email:String password: String):String
    }
    
`;
