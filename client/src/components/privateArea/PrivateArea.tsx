import React, { useEffect, useState } from 'react';
import styles from './PrivateArea.module.scss'
import { requestCredentials, hasCredentials } from '../../utils/connectHelper';


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
        }else{
            return (<div>Hello dear friend</div>)
        }   
    }

    export default PrivateArea;