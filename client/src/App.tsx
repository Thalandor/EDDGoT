import React, { Suspense, useEffect } from 'react';
import styles from './App.module.scss'
import Header from './components/header/Header';
import { routesMap } from './routes.config';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import EnsureLoggedIn from './components/login/EnsureLoggedIn';

const PrivateApp = () => {
  return (
    <div className={styles.App}>
      <Route component={EnsureLoggedIn} />
      <div className={styles.Header}>
        <Header></Header>
      </div>
      <main>
          <Suspense fallback={<div>Loading...</div>}>
            {
              <div>testtest</div>
              // Object.keys(routesMap).map((routeKey, index) => {
              //   const route = routesMap[routeKey]
              //   return (
              //     <Route key={index} exact path={route.path} component={route.component} />
              //   )
              // })
            }
          </Suspense>
        </main>
    </div>
  );
}


const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={PrivateApp} />
      </Switch>
    </div>
  );
}

export default App;
