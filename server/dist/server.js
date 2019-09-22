"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercice1_1 = require("./Exercice1");
// import { Exercice1Callback, Exercice1 } from 'Exercice1';
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ngrok_1 = __importDefault(require("ngrok"));
const config_1 = require("./config");
const Exercice2_1 = require("./Exercice2");
const Exercice3_1 = require("./Exercice3");
const Exercice4_1 = require("./Exercice4");
const config = config_1.Configuration.getInstance();
const app = express_1.default();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(body_parser_1.default.json({ type: '*/*' }));
app.get('/Exercice1', Exercice1_1.Exercice1);
app.post('/Exercice1callback', Exercice1_1.Exercice1Callback);
app.get('/Exercice2', Exercice2_1.Exercice2);
app.post('/Exercice2callback', Exercice2_1.Exercice2Callback);
app.post('/Exercice2txcallback', Exercice2_1.Exercice2TxCallback);
app.get('/Exercice3', Exercice3_1.Exercice3);
app.post('/Exercice3callback', Exercice3_1.Exercice3Callback);
app.get('/Exercice4', Exercice4_1.Exercice4);
app.post('/Exercice4callback', Exercice4_1.Exercice4Callback);
// run the app server and tunneling service
const server = app.listen(8088, () => {
    ngrok_1.default.connect(8088).then(ngrokUrl => {
        config.endpoint = ngrokUrl;
        console.log(`Your dApp is being served!, open at ${config.endpoint} and scan the QR to login!`);
    });
});
//# sourceMappingURL=server.js.map