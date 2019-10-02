import { Connect } from 'uport-connect';
import Web3 from 'web3';
export let uport = new Connect('EDD', {
    bannerImage: { '/': '/ipfs/Qmbp2YPeDmr2aCPiwWuJT8y87z2N4tHb65RfF1gmKg1iCF' },
    description: 'Something weird.',
    network: 'ropsten',
    profileImage: { '/': '/ipfs/Qmbp2YPeDmr2aCPiwWuJT8y87z2N4tHb65RfF1gmKg1iCF' },
});

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