import { Connect } from 'uport-connect';
import Web3 from 'web3';

const ipfsFamilyBanners = {
    STARK: { '/': '/ipfs/QmVmh9X6TxXW7LXVmkQZXZbCyT5BEXUHiQVDLgj7DcWUTE' },
    LANNISTER: { '/': '/ipfs/Qmbp2YPeDmr2aCPiwWuJT8y87z2N4tHb65RfF1gmKg1iCF' },
    TARGARYEN: { '/': '/ipfs/QmfT9csxuUT2AJAAs8MAE8Tg2q6dpcLKtqtgmgjd6MV4tc' }
}

// General documentation: https://github.com/uport-project/uport-connect/blob/develop/docs/reference/index.md

// Instantiate a new variable call 'uport' of a type Connect with two parameters. The first is the name of the identity (choose anything you want). The second an object with the configuration
// of the identity. The configuration object has, among others, these parameters: 
// bannerImage: Use the object ipfsFamilyBanners, specifically, the property of your family. Example: ipfsFamilyBanners.LANNISTER
// profileImage: Same as before.
// description: anything you want.
// network: Here you can select the network where we are going to operate. Use 'ropsten' (could be mainnet, rinkeby, etc...)
export let uport = new Connect('EDD', {
    bannerImage: ipfsFamilyBanners.LANNISTER,
    description: 'Something weird.',
    network: 'ropsten',
    profileImage:ipfsFamilyBanners.LANNISTER,
});


// Create a disclosureRequest using the uport object. This request will open a QR code on the browser
export const requestLogin = () => {
    let request = { requested: ['name'] }
    uport.requestDisclosure(request);
}


export const onResponseRequest = async () => {
    return await uport.onResponse('disclosureReq')
}

export const sendCredentials = () => {
    uport.sendVerification({
        exp: Math.floor(new Date().getTime() / 1000) + 30 * 24 * 60 * 60,
        claim: { 'WeddingInvitation': { 'Announcement': `You have been invited to the wedding of Robb and Talissa Stark.` } }
    })
}

export const requestCredentials = () => {
    uport.requestDisclosure(
        { verified: ['WeddingInvitation'] }
    )
}

export const hasCredentials = async () => {
    let response = await uport.onResponse('disclosureReq')
    if (response.payload && response.payload.WeddingInvitation) {
        return true;
    } else {
        return false;
    }
}


export const getPayment = async () => {
    const uportProvider = uport.getProvider();
    const web3 = new Web3(uportProvider);
    let accounts = await web3.eth.getAccounts();
    const txobject = {
        to: '0x696714Cc3DF9F067c1654d9376Bf0678E6A81A33',
        value: 1,
        from: accounts[0],
    }
    let res = await web3.eth.sendTransaction(txobject);
    return res.transactionHash;
}