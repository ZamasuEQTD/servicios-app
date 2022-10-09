"use strict";
require("dotenv").config();
const serverBack = require("./class/models/server");
const server = new serverBack();
server.start();
