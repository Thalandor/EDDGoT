"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const message = require('uport-transports').message.util;
const transports = require('uport-transports').transport;
const decodeJWT = require('did-jwt').decodeJWT;
const config = config_1.Configuration.getInstance();
exports.Exercice4 = (req, res) => {
    config.getCredentials().createDisclosureRequest({
        requested: ["name"],
        notifications: true,
        verified: ['Identity'],
        callbackUrl: config.endpoint + '/Exercice4callback'
    }).then(requestToken => {
        console.log(decodeJWT(requestToken)); //log request token to console
        const uri = message.paramsToQueryString(message.messageToURI(requestToken), { callback_type: 'post' });
        const qr = transports.ui.getImageDataURI(uri);
        res.send(`<div><img src="${qr}"/></div>`);
    });
};
exports.Exercice4Callback = (req, res) => {
    const jwt = req.body.access_token;
    console.log(jwt);
    console.log(decodeJWT(jwt));
    config.getCredentials().authenticateDisclosureResponse(jwt).then(creds => {
        //validate specific data per use case
        console.log(creds);
        console.log(creds.verified[0]);
    }).catch(err => {
        console.log("oops");
    });
};
//# sourceMappingURL=Exercice4.js.map