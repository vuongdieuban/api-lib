"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const axios_1 = require("axios");
class HttpService {
    constructor() {
        this.httpClient = axios_1.default.create();
    }
    get(url) {
        return this.httpClient.get(url);
    }
    post(url, data) {
        return this.httpClient.post(url, data);
    }
    put(url, data) {
        return this.httpClient.put(url, data);
    }
    delete(url) {
        return this.httpClient.delete(url);
    }
}
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map