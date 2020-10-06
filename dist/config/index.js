"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfig = exports.OperationMode = void 0;
const http_service_1 = require("../services/http.service");
var OperationMode;
(function (OperationMode) {
    OperationMode["DEV"] = "development";
    OperationMode["PROD"] = "production";
})(OperationMode = exports.OperationMode || (exports.OperationMode = {}));
class ApiConfig {
    static setOperationMode(mode) {
        this.operationMode = mode;
        this.BASE_URL = mode === OperationMode.DEV ? 'http://api.jobs-tracker.localhost' : 'http://prod_url';
    }
    static getBaseURL() {
        if (!Boolean(this.BASE_URL && this.operationMode)) {
            throw new Error('Please set operation mode before get base url');
        }
        return this.BASE_URL;
    }
    static setAuthHeader(accessToken) {
        this.httpService.setAuthHeader(accessToken);
    }
}
exports.ApiConfig = ApiConfig;
ApiConfig.httpService = http_service_1.HttpService;
//# sourceMappingURL=index.js.map