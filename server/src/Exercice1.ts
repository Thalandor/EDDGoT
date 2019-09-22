import { Configuration } from './config';

const message = require('uport-transports').message.util
const transports = require('uport-transports').transport
const decodeJWT = require('did-jwt').decodeJWT


const config = Configuration.getInstance();


export const Exercice1 = (req, res) => {
    config.getCredentials().createDisclosureRequest({
      requested: ["name"],
      notifications: true,
      callbackUrl: config.endpoint + '/Exercice1callback'
    }).then(requestToken => {
      console.log(decodeJWT(requestToken))  //log request token to console
      const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
      const qr =  transports.ui.getImageDataURI(uri)
      // res.json({qr: qr});
      res.json({data: requestToken});
    })
  }

export const Exercice1Callback =  (req, res) => {
    const jwt = req.body.access_token
    console.log(jwt);
    config.getCredentials().authenticateDisclosureResponse(jwt).then(credentials => {
        console.log(credentials);
        // Validate the information and apply authorization logic
    }).catch( err => {
        console.log(err)
    })
}