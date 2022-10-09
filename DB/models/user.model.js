"use strict";
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
const { Schema, model } = require("mongoose");
// const userSchema = Schema({
//     name: {
//         type: String,
//         required: [true,"Falta el nombre,papí"]
//     },
//     mail: {
//         type: String,
//         required: [true, "falta el mail"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "falta la contra"],
//     },
//     img: {
//         type: String
//     },
//     rol: {
//         type: String,
//         required: true,
//         emun: ["ADMIN","USER"]
//     },
//     status:{
//         type: Boolean,
//         default: true
//     },
//     google:{
//         type: Boolean,
//         default: false
//     }
// })
const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, "Falta el nombre,papí"]
    },
    apellido: {
        type: String,
        required: [true, "Falta el Apellido"]
    },
    email: {
        type: String,
        required: [true, "falta el mail"],
        unique: true,
        match: [
            /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
        ]
    },
    password: {
        type: String,
        required: [true, "falta la contra"],
    },
    sobreMi: {
        type: String
    }
});
userSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password } = _a, user = __rest(_a, ["__v", "password"]);
    return user;
};
module.exports = model("User", userSchema);
