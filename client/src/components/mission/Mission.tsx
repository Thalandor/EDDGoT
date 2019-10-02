import React from 'react';
import styles from './Mission.module.scss'

interface IMissionProps {
    text: string,
    pj: string
}


const Mission = (props : IMissionProps) => {
   
    return (
            <div className={styles.missionContainer}>
                <div className={`nes-balloon from-left ${styles.missionText}`}>{props.text}</div>
                <img alt="pj" src={props.pj}></img>
            </div>
    )
}

export default Mission;