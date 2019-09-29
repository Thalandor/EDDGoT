import React, { useState, useEffect } from 'react';
import styles from './LogoutBtn.module.scss'
import { uport } from '../../utils/connectHelper';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesMap } from '../../routes.config';

const LogoutBtn = (props: RouteComponentProps) => {
    const logoutClick = () => {
        uport.logout();
        props.history.push(routesMap.LOGIN.path);
    }
    return (
        <button className="nes-btn is-primary" onClick={() => logoutClick()}>Logout</button>
    )
}

export default withRouter(LogoutBtn);