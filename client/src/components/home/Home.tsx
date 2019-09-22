import React from 'react';
import styles from './Home.module.scss'
import { Utils } from '../../utils/utils';

const Home = () =>{
    const test = () => {
        console.log('hola');
    }
    return (
        <div>
            <button onClick={() => Utils.GetConfig()}></button>
            hola
        </div>
        
    )
}

export default Home;