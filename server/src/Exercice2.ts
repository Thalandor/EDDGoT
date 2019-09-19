import { Configuration } from './config';

const message = require('uport-transports').message.util
const transports = require('uport-transports').transport
const decodeJWT = require('did-jwt').decodeJWT


const config = Configuration.getInstance();


export const Exercice2 = (req, res) => {
  config.getCredentials().createDisclosureRequest({
    notifications: true,
    accountType: 'keypair',
    networkId: '0x4',
    callbackUrl: config.endpoint + '/Exercice2callback'
  }).then(requestToken => {
    console.log(requestToken)
    console.log(decodeJWT(requestToken))  //log request token to console
    const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
    const qr =  transports.ui.getImageDataURI(uri)
    res.send(`<div><img src="${qr}"/></div>`)
  })
  }

export const Exercice2Callback =  (req, res) => {
  console.log("Callback hit")
  const jwt = req.body.access_token
  config.getCredentials().authenticateDisclosureResponse(jwt).then(creds => {
    // take this time to perform custom authorization steps... then,
    // set up a push transport with the provided 
    // push token and public encryption key (boxPub)
    const push = transports.push.send(creds.pushToken, creds.boxPub)

    const txObject = {
      to: creds.mnid,
      value: '10000000000000000',
    }

    config.getCredentials().createTxRequest(txObject, {callbackUrl: `${config.endpoint}/Exercice2txcallback`}).then(attestation => {
      console.log(`Encoded JWT sent to user: ${attestation}`)
      return push(attestation)  // *push* the notification to the user's uPort mobile app.
    }).then(res => {
      console.log(res)
      console.log('Push notification sent and should be recieved any moment...')
      console.log('Accept the push notification in the uPort mobile application')
    })
  })
}

export const Exercice2TxCallback =  (req, res) => {
  console.log("txCallback hit")
  console.log(req.body)
  // ngrok.disconnect()
}