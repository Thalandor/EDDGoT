import { Exercice1, Exercice1Callback } from './Exercice1';
// import { Exercice1Callback, Exercice1 } from 'Exercice1';
import express from 'express';
import bodyParser from 'body-parser';
import ngrok from 'ngrok';
import { Credentials } from 'uport-credentials';
import { Configuration } from './config';
import { Exercice2, Exercice2Callback, Exercice2TxCallback } from './Exercice2';
import { Exercice3, Exercice3Callback } from './Exercice3';
import { Exercice4Callback, Exercice4 } from './Exercice4';

const decodeJWT = require('did-jwt').decodeJWT
const transports = require('uport-transports').transport
const message = require('uport-transports').message.util
const config = Configuration.getInstance();

const app = express();
app.use(bodyParser.json({ type: '*/*' }))


app.get('/Exercice1', Exercice1);

app.post('/Exercice1callback', Exercice1Callback);

app.get('/Exercice2', Exercice2);

app.post('/Exercice2callback', Exercice2Callback);

app.post('/Exercice2txcallback', Exercice2TxCallback);

app.get('/Exercice3', Exercice3);

app.post('/Exercice3callback', Exercice3Callback);

app.get('/Exercice4', Exercice4);

app.post('/Exercice4callback', Exercice4Callback);

// run the app server and tunneling service
const server = app.listen(8088, () => {
  ngrok.connect(8088).then(ngrokUrl => {
    config.endpoint = ngrokUrl
    console.log(`Your dApp is being served!, open at ${config.endpoint} and scan the QR to login!`)
  })
})