//npm install --save ngrok express did-jwt uport-transports uport-credentials


const { Credentials } = require('uport-credentials');
let credentials = Credentials.createIdentity();
console.log(credentials);