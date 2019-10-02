import React from 'react';
import styles from './Family.module.scss'
import { withRouter, RouteComponentProps } from 'react-router';
import { routesMap } from '../../routes.config';
import { LocalStorageHelper } from '../../utils/localStorageHelper';
import { FamiliesEnum } from './families';

export interface FamilyProps {
    name: string;
    warcry: string;
    picture: string;
    family: FamiliesEnum;
}

const Family = (props: FamilyProps & RouteComponentProps) => {
    const familyChoosenClick = (name: FamiliesEnum) => {
        LocalStorageHelper.saveValue("family", name);
        props.history.push(routesMap.FAMILY.path)
    }
    return (
        <div className={styles.familyContainer} onClick={() => familyChoosenClick(props.family)}>
            <div className={styles.picture}>
                {<img alt="pj" src={props.picture}></img>}
            </div>
            <div className={styles.familyInfo}>
                <div className={styles.info}>
                    <div className={styles.infoTitle}>Family:</div>
                    <div>{props.name}</div>
                </div>
                <div>
                    <div>Warcry:</div>
                    <div>{props.warcry}</div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Family);