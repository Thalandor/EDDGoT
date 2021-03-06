import { Connect } from 'uport-connect';
import Web3 from 'web3';

const ipfsFamilyBanners = {
    STARK: { '/': '/ipfs/QmVmh9X6TxXW7LXVmkQZXZbCyT5BEXUHiQVDLgj7DcWUTE' },
    LANNISTER: { '/': '/ipfs/Qmbp2YPeDmr2aCPiwWuJT8y87z2N4tHb65RfF1gmKg1iCF' },
    TARGARYEN: { '/': '/ipfs/QmfT9csxuUT2AJAAs8MAE8Tg2q6dpcLKtqtgmgjd6MV4tc' }
}


interface TransactionType {
    to: string,
    from: string,
    value: number
}

// General documentation: https://github.com/uport-project/uport-connect/blob/develop/docs/reference/index.md

// Exercice: Instantiate a new variable call 'uport' of a type Connect with two parameters. 
// Hints: The first is the name of the identity (choose anything you want). The second an object with the configuration
// of the identity. The configuration object has, among others, these parameters: 
// bannerImage: Use the object ipfsFamilyBanners, specifically, the property of your family. Example: ipfsFamilyBanners.LANNISTER
// profileImage: Same as before.
// description: anything you want.
// network: Here you can select the network where we are going to operate. Use 'ropsten' (could be mainnet, rinkeby, etc...)
export let uport = new Connect();

// Exercice: Create a disclosureRequest using the uport object and request the name of the user.
// Hints: This request will open a QR code on the browser that you will have to scan.
// First create a request object, with a property called 'requested'. This property is an array of strings of the properties you want the user
// to disclose. For example { requested: ['birthday', 'socialStatus']}. Careful, the properties needs to exist on the identity of the user.
// To create the request, use the function requestDisclosure from the uport object and pass the request object created as a parameter.
export const requestLogin = () => {
    // Create the request object

    // Call the function
}



// Exercice: Return the response from the user of a request called 'disclosureReq'.
// Hints: Use the function onResponse from the uport object (returns a promise). This function accepts as a parameter a request Id.
export const onResponseRequest = async () => {
    let placeholder: any;
    return placeholder;
}

// Exercice: Send the credentials you created to the user.
// Help: Use the sendVerification of the uport object. As a parameter needs an object with the properties 'exp'. Which represents the expiration
// of the project. And a property claim. Which is a json object representing the data you want to send. Example of a claim:    { 'NameOfCredential': { 'NameofProperty': `Information.` } }
// Avoid spaces and slashes in nameofcredential and nameofproperty!!!!
// Lannister part: Create a wedding pass for the Stark to celebrate the wedding of Robb and Talissa.
// Stark: Create an ID for the knee bending club for Jon.
// Targaryen: Create an Id to remember the name of your khaleesi.
export const sendCredentials = () => {

}

// Exercice: Request the credential you send to the user earlier.
// Hints: This exercice is identical to the previous one. You need to call the requestDisclosure function as earlier, but this time,
// use the 'requested' parameter use the 'verified', and pass a string array with the name of the credentials you are requesting.
export const requestCredentials = () => {

}

// Exercice: Check if the user has returned the credentials.
// Hints: Use the onResponse function to wait for the response of the user web app(remember, it's a promise!) and check if the 
// payload has a property with the name of the credential. For example response.payload.[name] . If it exists return a true, if not, false.
// This way we check if the user has sent us the credential.
export const hasCredentials = async () => {
    return false;
}

// Exercice: Create a payment to be done by the user.
// Hints: You will need to use several functions to make it work.
// First you will need to get the provider from uport and pass it to a new web3 object using the function getProvider
export const getPayment = async () => {
    // Get the provider from uport.
    
    // Pass it to a new instance of a Web3 object
    
    // Get the accounts using the web3 object. (The function is inde the eth property of the web3 object)
    
    // Create the transaction object of type TransactionType. As a to property use this value: 0xEE9dc4926A6C443BD1c164Bc866483Ce7788A6C1
    
    // Send the transaction using the function sendTransaction(is a promise) and passing the object created in the previous step.
    
    // Return the transactionHash property of the object created in the previous step.
}