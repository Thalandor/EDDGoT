import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesMap } from '../../routes.config';
import { uport } from '../../utils/connectHelper';

const EnsureLoggedIn = (props: RouteComponentProps) =>{

    useEffect(() => {
        let isLoggedIn: boolean = Boolean(uport.did);        
        console.log(isLoggedIn);
        // get logged info
        if(!isLoggedIn){
            props.history.push(routesMap.LOGIN.path)
        }else{
            props.history.push(routesMap.HOME.path)
        }
        
    }, []);

    return null;
}

export default withRouter(EnsureLoggedIn);