import React, { Suspense } from 'react';
import styles from './Start.module.scss'
import { Utils } from '../../utils/utils';
import Header from '../header/Header';
import { familyRoutesMap } from '../../routes.config';
import { Route } from 'react-router';

const Start = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <Header></Header>
      </div>
      <main className={styles.Content}>
        <Suspense fallback={<div>Loading...</div>}>
          {
            Object.keys(familyRoutesMap).map((routeKey, index) => {
              const route = familyRoutesMap[routeKey]
              return (
                <Route key={index} exact path={route.path} component={route.component} />
              )
            })
          }
        </Suspense>
      </main>
    </div>

  )
}

export default Start;