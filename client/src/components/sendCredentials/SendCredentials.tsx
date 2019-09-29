import React from 'react';
import styles from './SendCredentials.module.scss'
import { sendCredentials, uport } from '../../utils/connectHelper';

const SendCredentials = () =>{
    const sendCredentialsHandler = () => {
        sendCredentials();
        console.log('send things');
    }
    return (
        <div>
            Do things:
            <button onClick={() => sendCredentialsHandler()}></button>
        </div>
        
    )
}

export default SendCredentials;