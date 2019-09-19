import React, { Suspense } from 'react';
import styles from './App.module.scss'
import Header from './components/header/Header';
import { routesMap } from './routes.config';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <Header></Header>
      </div>
      <main>
          <Suspense fallback={<div>Loading...</div>}>
            {
              Object.keys(routesMap).map((routeKey, index) => {
                const route = routesMap[routeKey]
                return (
                  <Route key={index} exact path={route.path} component={route.component} />
                )
              })
            }
          </Suspense>
        </main>
    </div>
  );
}

export default App;
