"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = __importDefault(require("./dbconfig"));
const ColorsSchema = new dbconfig_1.default.Schema({
    color: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
    },
    tolerance: {
        type: Number,
        required: true,
    },
});
exports.default = dbconfig_1.default.model("colors", ColorsSchema);
