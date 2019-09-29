import React, { useState, useEffect } from 'react';
import styles from './Login.module.scss'
import { uport, requestLogin, onResponseRequest } from '../../utils/connectHelper';
import { LocalStorageHelper } from '../../utils/localStorageHelper';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesMap } from '../../routes.config';

const Login = (props: RouteComponentProps) =>{

    useEffect(() => {
        const uportLogin = async () =>{
            requestLogin();
            let response = await onResponseRequest();
            console.log(response);
            LocalStorageHelper.saveValue<unknown>("userName", response.payload.name)
            if(response.payload.name){
                props.history.push(routesMap.HOME.path);
            }
        }
        uportLogin();
    }, []);     


    return (
        <div>
            Waiting for loggin...          
        </div>        
    )
}

export default withRouter(Login);