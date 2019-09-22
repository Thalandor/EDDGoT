import React, { useState, useEffect } from 'react';
import styles from './Exercice1.module.scss'
import { Utils } from '../../utils/utils';
import {Connect} from 'uport-connect';

const Exercice1 = () =>{
    useEffect( () => {
        
        const uport = new Connect('EDD');
        const fetchData = async () => {      
            const config = await Utils.GetConfig();      
            const result = await fetch(
              `${config.apiURL}/Exercice1`,
            );
            let resultJson = await result.json();
            let reqId = "LoginReq";
            uport.send(resultJson.data, reqId);

            uport.onResponse(reqId).then((payload: string) => 
           {
               let intervalId = setInterval(() => {
                    if(payload){
                        console.log(payload);
                    }{
                        console.log('not payloadyet');
                    }
               }, 5000);

           }); 
          };
          fetchData();
    }, []);
    const [qr, setQr] = useState();
    return (
        <img src={qr}></img>
    )
}

export default Exercice1;