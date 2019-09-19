import { Configuration } from './config';

const message = require('uport-transports').message.util
const transports = require('uport-transports').transport
const decodeJWT = require('did-jwt').decodeJWT


const config = Configuration.getInstance();


export const Exercice3 = (req, res) => {
    config.getCredentials().createDisclosureRequest({
      requested: ["name"],
      notifications: true,
      callbackUrl: config.endpoint + '/Exercice3callback'
    }).then(requestToken => {
      console.log(decodeJWT(requestToken))  //log request token to console
      const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
      const qr =  transports.ui.getImageDataURI(uri)
      res.send(`<div><img src="${qr}"/></div>`)
    })
  }

export const Exercice3Callback =  (req, res) => {
  const jwt = req.body.access_token
  config.getCredentials().authenticateDisclosureResponse(jwt).then(creds => {
    // take this time to perform custom authorization steps... then,
    // set up a push transport with the provided 
    // push token and public encryption key (boxPub)
    const push = transports.push.send(creds.pushToken, creds.boxPub)

    config.getCredentials().createVerification({
      sub: creds.did,
      exp: Math.floor(new Date().getTime() / 1000) + 30 * 24 * 60 * 60,
      claim: {'Identity' : {'Last Seen' : `${new Date()}`}}
      // Note, the above is a complex (nested) claim. 
      // Also supported are simple claims:  claim: {'Key' : 'Value'}
    }).then(attestation => {
      console.log(`Encoded JWT sent to user: ${attestation}`)
      console.log(`Decodeded JWT sent to user: ${JSON.stringify(decodeJWT(attestation))}`)
      return push(attestation)  // *push* the notification to the user's uPort mobile app.
    }).then(res => {
      console.log(res)
      console.log('Push notification sent and should be recieved any moment...')
      console.log('Accept the push notification in the uPort mobile application')
      // ngrok.disconnect()
    })
  })
}