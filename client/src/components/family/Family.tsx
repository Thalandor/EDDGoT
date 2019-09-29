import React from 'react';
import styles from './Family.module.scss'
import { withRouter, RouteComponentProps } from 'react-router';
import { routesMap, familyRoutesMap } from '../../routes.config';
import { LocalStorageHelper } from '../../utils/localStorageHelper';

export interface FamilyProps{
    name: string;
    warcry: string;
    picture: string;
}

const Family = (props: FamilyProps & RouteComponentProps) => {
    const familyChoosenClick = (name: string) => {
        LocalStorageHelper.saveValue("family", name);
        props.history.push(routesMap.FAMILY.path)
    }
    return (
        <div className={styles.familyContainer} onClick={() => familyChoosenClick(props.name)}>
            <div className={styles.picture}>
                {props.picture}
            </div>
            <div className={styles.familyInfo}>
                <div>Family:</div>
                <div>{props.name}</div>
                <div>Warcry:</div>
                <div>{props.warcry}</div>
            </div>
        </div>

    )
}

export default withRouter(Family);