import React, { useState, useEffect } from 'react';
import styles from './Login.module.scss'
import {Connect} from 'uport-connect';

const Login = () =>{

    useEffect(() => {
        const uport = new Connect('MyDApp');
        uport.requestDisclosure();
   
        uport.onResponse('disclosureReq').then(res => {
          const resDid = res.payload.did;
          console.log(res);
          const json = JSON.stringify(res.payload);
          console.log(json);
          setDid(resDid);

        })
    }, []);     

     const [did, setDid] = useState();

    return (
        <div>
            Did: {did}            
        </div>
        
    )
}

export default Login;