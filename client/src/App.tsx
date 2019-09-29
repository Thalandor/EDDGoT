import React from 'react';
import styles from './App.module.scss'
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import EnsureLoggedIn from './components/login/EnsureLoggedIn';
import Home from './components/home/Home';
import Start from './components/start/Start';
import { routesMap } from './routes.config';

const PrivateApp = () => {
  return (
    <div className={styles.App}>
      <Route component={EnsureLoggedIn} />
      <Route exact component={Home} path={routesMap.HOME.path} />
      <Route component={Start} path={routesMap.FAMILY.path} />
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
