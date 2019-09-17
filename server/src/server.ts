// import { Exercice1Callback, Exercice1 } from 'Exercice1';
import express from 'express';
import bodyParser from 'body-parser';
import ngrok from 'ngrok';

const decodeJWT = require('did-jwt').decodeJWT
const { Credentials } = require('uport-credentials')
const transports = require('uport-transports').transport
const message = require('uport-transports').message.util

let endpoint = ''
const app = express();
app.use(bodyParser.json({ type: '*/*' }))

//setup Credentials object with newly created application identity.
const credentials = new Credentials({
  appName: 'Login Example',
  did: 'did:ethr:0x3c01723a220cd7a959675e2377f8843fa5dec9a0',
  privateKey: '5f190d5c3996862ca8f89b499714a9f49efddded7bab86eb288ede4df4d306e3'
})

app.get('/Exercice1', (req, res) => {
  credentials.createDisclosureRequest({
    requested: ["name"],
    notifications: true,
    callbackUrl: endpoint + '/Exercice1callback'
  }).then(requestToken => {
    console.log(decodeJWT(requestToken))  //log request token to console
    console.log(message) 
    console.log(message.getURLJWT()) 
    const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
    console.log(uri);
    const qr =  transports.ui.getImageDataURI(uri)
    res.send(`<div><img src="${qr}"/></div>`)
  })
});

app.post('/Exercice1callback', (req, res) => {
  const jwt = req.body.access_token
  console.log(jwt);
  credentials.authenticateDisclosureResponse(jwt).then(credentials => {
      console.log(credentials);
      // Validate the information and apply authorization logic
  }).catch( err => {
      console.log(err)
  })
});

// run the app server and tunneling service
const server = app.listen(8088, () => {
  ngrok.connect(8088).then(ngrokUrl => {
    endpoint = ngrokUrl
    console.log(`Your dApp is being served!, open at ${endpoint} and scan the QR to login!`)
  })
})