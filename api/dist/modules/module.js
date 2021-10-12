"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./schema/user"));
const model = mongoose_1.default.model.bind(mongoose_1.default);
module.exports = {
    User: model('User', user_1.default)
};
