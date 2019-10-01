import React from 'react';
import styles from './SendCredentials.module.scss'
import { sendCredentials, uport } from '../../utils/connectHelper';
import { FamiliesEnum } from '../family/families';
import { LocalStorageHelper } from '../../utils/localStorageHelper';
import Mission from '../mission/Mission';

interface FamilyCredential {
    family: FamiliesEnum,
    text: string,
    pj: string
}

const FamilyCredentialInfo: FamilyCredential[] = [{
    family: FamiliesEnum.LANNISTER,
    text: "To celebrate the wedding of Robb and Talissa Stark we decided to create some invitations. Let's make an unforgottable wedding!",
    pj: `${process.env.PUBLIC_URL}/assets/tyrion.png`
},
{
    family: FamiliesEnum.STARK,
    text: "I bended the knee so many times that I'm thinking of sign up to the knee bending club. Give me the id!",
    pj: `${process.env.PUBLIC_URL}/assets/jon.png`
},
{
    family: FamiliesEnum.TARGARYEN,
    text: "I always forgot how many names I have..would be great that someone helps me with that...",
    pj: `${process.env.PUBLIC_URL}/assets/daenerysmiss.png`
}]

const SendCredentials = () => {
    const sendCredentialsHandler = () => {
        sendCredentials();
        console.log('send things');
    }
    let family = FamilyCredentialInfo.filter(fp => fp.family == LocalStorageHelper.getValue<FamiliesEnum>("family"))[0];
    return (
        <div className={styles.sendCredentialsContainer}>
            <Mission pj={family.pj} text={family.text}></Mission>            
            <button className="nes-btn is-primary" onClick={() => sendCredentialsHandler()}>Do it!</button>
        </div>

    )
}

export default SendCredentials;