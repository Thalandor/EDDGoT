// export const Exercice1 = (req, res) => {
//     credentials.createDisclosureRequest({
//       requested: ["name"],
//       notifications: true,
//       callbackUrl: endpoint + '/Exercice1/callback'
//     }).then(requestToken => {
//       console.log(decodeJWT(requestToken))  //log request token to console
//       const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
//       const qr =  transports.ui.getImageDataURI(uri)
//       res.send(`<div><img src="${qr}"/></div>`)
//     })
//   }
// export const Exercice1Callback =  (req, res) => {
//     const jwt = req.body.access_token
//     console.log(jwt);
//     credentials.authenticateDisclosureResponse(jwt).then(credentials => {
//         console.log(credentials);
//         // Validate the information and apply authorization logic
//     }).catch( err => {
//         console.log(err)
//     })
// }
//# sourceMappingURL=Exercice1.js.map