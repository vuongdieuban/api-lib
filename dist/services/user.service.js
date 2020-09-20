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
exports.UserService = void 0;
const config_1 = require("../config");
const http_service_1 = require("./http.service");
class UserService {
    constructor() {
        this.httpService = new http_service_1.HttpService();
        this.BASE_URL = config_1.ApiConfig.getBaseURL();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/user`;
            const { data } = yield this.httpService.get(url);
            return data;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map