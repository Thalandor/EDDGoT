import React from 'react';
import styles from './Login.module.scss'
import { requestLogin, onResponseRequest } from '../../utils/connectHelper';
import { LocalStorageHelper } from '../../utils/localStorageHelper';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesMap } from '../../routes.config';

const Login = (props: RouteComponentProps) => {
    const onLoginHandler = async () => {
        requestLogin();
        let response = await onResponseRequest();
        console.log(response);
        LocalStorageHelper.saveValue<unknown>("userName", response.payload.name)
        if (response.payload.name) {
            props.history.push(routesMap.HOME.path);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <h1>Game of identities</h1>
            <h2>You hack or you die</h2>
            <div className={styles.loginText}>
                <span>Welcome to the game of identities. Push login to start</span>
                <button onClick={() => onLoginHandler()}>Login with uport</button>
            </div>
        </div>
    )
}

export default withRouter(Login);