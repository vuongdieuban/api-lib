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
exports.JobApplicationService = void 0;
const config_1 = require("../config");
const http_service_1 = require("./http.service");
class JobApplicationService {
    constructor() {
        this.httpService = http_service_1.HttpService;
        this.BASE_URL = config_1.ApiConfig.getBaseURL();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/job-application`;
            const { data } = yield this.httpService.get(url);
            return data;
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/job-application`;
            const { data } = yield this.httpService.post(url, payload);
            return data;
        });
    }
    reorder(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/job-application/reorder/${id}`;
            const { data } = yield this.httpService.put(url, payload);
            return data;
        });
    }
    archive(id, archive) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}/job-application/archive/${id}`;
            const { data } = yield this.httpService.put(url, { archive });
            return data;
        });
    }
}
exports.JobApplicationService = JobApplicationService;
//# sourceMappingURL=job-application.service.js.map