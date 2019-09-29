import React from 'react';
import styles from './Home.module.scss'
import { RouteComponentProps, withRouter } from 'react-router';
import { routesMap } from '../../routes.config';
import Family from '../family/Family';
import { Families } from '../family/families';

const Home = (props: RouteComponentProps) =>{


    return (
        <div className={styles.familySelectorContainer}>
            Select your allegiance:
            {
                Families.map((family,index) => {                   
                    return <Family name={family.name} key={index} warcry={family.warcry} picture={family.picture}></Family>
                })            
            }

        </div>
        
    )
}

export default withRouter(Home);