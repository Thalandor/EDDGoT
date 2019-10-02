import React, { useEffect, useState } from 'react';
import styles from './PrivateArea.module.scss'
import { requestCredentials, hasCredentials } from '../../utils/connectHelper';
import { FamiliesEnum } from '../family/families';
import { LocalStorageHelper } from '../../utils/localStorageHelper';

interface privateInfo {
    family: FamiliesEnum
    text: string;
    picture: string;
}

const privateInfo: privateInfo[] = [{ family: FamiliesEnum.LANNISTER, text: "After your valuable participation, finally the family decided to trust you a preview of his new warcry", picture: `${process.env.PUBLIC_URL}/assets/lannister_private.jpg` },
{ family: FamiliesEnum.STARK, text: "After a long fight, you have discovered the most important secret of the whole world!", picture: `${process.env.PUBLIC_URL}/assets/stark_private.jpg` },
{ family: FamiliesEnum.TARGARYEN, text: "You gained the trust of your khaalesi. yYou smile at her, she smiles at you. You know something good is going to happen today.", picture: `${process.env.PUBLIC_URL}/assets/targaryen_private.jpg` }]

const PrivateArea = () => {
    useEffect(() => {
        const validateCredentials = async () => {
            requestCredentials();
            let hasAccess = await hasCredentials();
            setAccessPrivateArea(hasAccess);
        }
        validateCredentials();
    }, [])
    const [hasAccessPrivateArea, setAccessPrivateArea] = useState(false)

    if (!hasAccessPrivateArea) {
        return (
            <div>
                Not allowed
            </div>
        )
    } else {
        let familyInfo = privateInfo.filter(pi => pi.family === LocalStorageHelper.getValue("family"))[0];
        return (
            <div className={styles.privateAreaContainer}>
                <div className={styles.generalText}>Congratulations! You have survived to the game of identities.</div>
                <div className={styles.particularText}>{familyInfo.text}</div>
                <img alt="familypic" src={familyInfo.picture}></img>
            </div>
        )
    }
}

export default PrivateArea;