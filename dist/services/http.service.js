"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const axios_1 = require("axios");
class HttpBaseService {
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
    setAuthHeader(accessToken) {
        this.httpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
}
exports.HttpService = new HttpBaseService();
//# sourceMappingURL=http.service.js.map