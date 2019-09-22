import React, { Suspense, useEffect } from 'react';
import styles from './App.module.scss'
import Header from './components/header/Header';
import { routesMap } from './routes.config';
import { Route } from 'react-router-dom';
import ngrok from 'ngrok';


const App: React.FC = () => {

  // useEffect(() => {
  //   // run the app server and tunneling service
  // ngrok.connect(8088).then(ngrokUrl => {
  //   console.log(`${ngrokUrl}`)
  //   return function cleanup() {
  //     console.log(`disconnect`)
  //     ngrok.disconnect();
  //   };
  // })
  // }, []);

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
