import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesMap } from '../../routes.config';

const EnsureLoggedIn = (props: RouteComponentProps) =>{

    useEffect(() => {
        let isLoggedIn: boolean = false;
        // get logged info
        if(!isLoggedIn){
            props.history.replace(routesMap.LOGIN.path)
        }
        
    }, []);

    return null;
}

export default withRouter(EnsureLoggedIn);