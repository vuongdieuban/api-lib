"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfig = exports.OperationMode = void 0;
var OperationMode;
(function (OperationMode) {
    OperationMode[OperationMode["DEV"] = 0] = "DEV";
    OperationMode[OperationMode["PROD"] = 1] = "PROD";
})(OperationMode = exports.OperationMode || (exports.OperationMode = {}));
class ApiConfig {
    static setOperationMode(mode) {
        this.operationMode = mode;
        this.BASE_URL = mode === OperationMode.DEV ? 'http://api.localhost' : 'http://prod_url';
    }
    static getBaseURL() {
        if (!Boolean(this.BASE_URL && this.operationMode)) {
            throw new Error('Please set operation mode before get base url');
        }
        return this.BASE_URL;
    }
}
exports.ApiConfig = ApiConfig;
//# sourceMappingURL=index.js.map