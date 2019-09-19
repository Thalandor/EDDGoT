"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uport_credentials_1 = require("uport-credentials");
class Configuration {
    constructor() {
        this._endpoint = '';
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(value) {
        this._endpoint = value;
    }
    static getInstance() {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
            // ... any one time initialization goes here ...
        }
        return Configuration.instance;
    }
    getCredentials() {
        //setup Credentials object with newly created application identity.
        return new uport_credentials_1.Credentials({
            did: 'did:ethr:0x3c01723a220cd7a959675e2377f8843fa5dec9a0',
            privateKey: '5f190d5c3996862ca8f89b499714a9f49efddded7bab86eb288ede4df4d306e3',
        });
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=config.js.map