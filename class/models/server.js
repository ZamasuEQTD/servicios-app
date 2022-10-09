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
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("../../graphql/typeDefs");
const resolvers_1 = require("../../graphql/resolvers");
const express = require("express");
const cors = require("cors");
const DB = require("../../DB/config.db");
class Server {
    constructor(app, port, usersPath, authPath, apolloServer) {
        this.app = app;
        this.port = port;
        this.usersPath = usersPath;
        this.authPath = authPath;
        this.apolloServer = apolloServer;
        this.apolloServer = new apollo_server_express_1.ApolloServer({
            typeDefs: typeDefs_1.typeDefs,
            resolvers: resolvers_1.resolvers
        });
        this.app = express();
        // this.port = process.env.PORT
        this.port = process.env.PORT;
        this.usersPath = "/api/users";
        this.authPath = "/api/auth";
        //connecting db
        this.dataDB();
        //middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }
    routes() {
        this.app.use(this.authPath, require("../../routes/auth.routes"));
        this.app.use(this.usersPath, require("../../routes/user.routes"));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apolloServer.start();
            this.apolloServer.applyMiddleware({
                app: this.app
            });
            this.app.listen(this.port, () => {
                console.log("corriendo en", this.port);
            });
        });
    }
    middlewares() {
        //CORS
        this.app.use(cors());
        //lectura body
        this.app.use(express.json());
        //directorio público
        this.app.use(express.static("public"));
    }
    dataDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield DB();
        });
    }
}
module.exports = Server;
