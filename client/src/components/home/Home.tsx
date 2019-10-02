import React from 'react';
import styles from './Home.module.scss'
import { RouteComponentProps, withRouter } from 'react-router';
import Family from '../family/Family';
import { Families } from '../family/families';

const Home = (props: RouteComponentProps) => {


    return (
        <div className={styles.familyPage}>
            <h1>Select your allegiance</h1>
            <div className={styles.familySelectorContainer}>
                <div>
                {
                    Families.map((family, index) => {
                        return <Family name={family.name} key={index} warcry={family.warcry} picture={family.picture} family={family.family}></Family>
                    })
                }
                </div>
            </div>
        </div>

    )
}

export default withRouter(Home);