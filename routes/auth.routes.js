"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const { login } = require("../controllers/auth");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("correo", "Correo Obligatorio. ok").isEmail()
], login);
module.exports = router;
