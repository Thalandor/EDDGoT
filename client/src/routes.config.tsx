import React from 'react';

export const routesMap = {
  HOME: {
    path: '/',
    component: React.lazy(() => import( /* webpackChunkName: "Lore" */ /* webpackPrefetch: true */  './components/home/Home')),
    label: 'Home' 
  },
  EXERCICE1: {
    path: '/exercice1',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/exercice1/Exercice1')),
    label: 'Exercice1'
  },
}
