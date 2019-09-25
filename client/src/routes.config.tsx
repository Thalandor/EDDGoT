import React from 'react';

export const routesMap = {
  HOME: {
    path: '/',
    component: React.lazy(() => import( /* webpackChunkName: "Lore" */ /* webpackPrefetch: true */  './components/exercice1/Exercice1')),
    label: 'Home' 
  },
  LOGIN: {
    path: '/login',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/exercice1/Exercice1')),
    label: 'Login'
  },
  EXERCICE1: {
    path: '/exercice1',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/exercice1/Exercice1')),
    label: 'Exercice1'
  },
}
