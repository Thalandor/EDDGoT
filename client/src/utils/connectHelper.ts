import { Connect } from 'uport-connect';
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
    if(response.payload && response.payload.WeddingInvitation){
        return true;
    }else{
        return false;
    }
}


export const getPayment = () => {
    const txObj = {
        address: '0x71845bbfe5ddfdb919e780febfff5eda62a30fdc',
        value: 1 * 1.0e18
      }
      uport.sendTransaction(txObj, 'ethSendReq')
      uport.onResponse('ethSendReq').then(res => {
        const txId = res.payload
      })
}