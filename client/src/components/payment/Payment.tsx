import React, { useState } from 'react';
import styles from './Payment.module.scss'
import { getPayment } from '../../utils/connectHelper';
import { FamiliesEnum } from '../family/families';
import { LocalStorageHelper } from '../../utils/localStorageHelper';
import Mission from '../mission/Mission';

interface FamilyPayment {
    family: FamiliesEnum,
    text: string,
    result: string,
    picture: string,
    pj: string
}

const FamilyPaymentInfo: FamilyPayment[] = [{ family: FamiliesEnum.LANNISTER, 
    text: "The Freys are asking a generous sum for some wedding expenses. Demand these funds to our vassals!", 
    result: "The Lannister send their regards.", 
    picture: `${process.env.PUBLIC_URL}/assets/redWedding.gif`,
    pj: `${process.env.PUBLIC_URL}/assets/tyrion.png`  },
{ family: FamiliesEnum.STARK, 
    text: "Little finger wants a sum to liberate Ned from the hands of the Lannister, we must trust him!", 
    result: "You shouldn't trust me", 
    picture: `${process.env.PUBLIC_URL}/assets/nedbehead.gif`,
    pj: `${process.env.PUBLIC_URL}/assets/jon.png`  },
{ family: FamiliesEnum.TARGARYEN, 
    text: "The dothraki promised me the crown in exchange for my sister, of course I want to do it!", 
    result: "A crown for a king!", 
    picture: `${process.env.PUBLIC_URL}/assets/crownforking.gif`,
    pj: `${process.env.PUBLIC_URL}/assets/viserys.png`   }]

const Payment = () => {
    const [isPaymentMade, setPayment] = useState(false);
    const onClickPaymentBtnHandler = async () => {
        let paymentMade = await getPayment();
        setPayment(Boolean(paymentMade));
    }
    let family = FamilyPaymentInfo.filter(fp => fp.family == LocalStorageHelper.getValue<FamiliesEnum>("family"))[0];

    if (isPaymentMade) {
        return (
            <div className={styles.paymentContainer}>
                {family.result}
                <img src={family.picture}></img>
            </div>
        )
    } else {
        return (
            <div className={styles.paymentContainer}>                
                <Mission pj={family.pj} text={family.text}></Mission>       
                <button className="nes-btn is-primary" onClick={() => onClickPaymentBtnHandler()}>Make deal!</button>
            </div>
        )
    }
}

export default Payment;