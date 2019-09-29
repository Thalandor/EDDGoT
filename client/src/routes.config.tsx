import React from 'react';

export const routesMap = {
  HOME: {
    path: '/',
    component: React.lazy(() => import( /* webpackChunkName: "Lore" */ /* webpackPrefetch: true */  './components/home/Home')),
    label: 'Home' 
  },
  LOGIN: {
    path: '/login',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/login/Login')),
    label: 'Login'
  },
  FAMILY: {
    path: '/family',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/start/Start')),
    label: 'Start'
  },
}

export const familyRoutesMap = {
  CREDENTIALS: {
    path: '/family/credentials',
    component: React.lazy(() => import( /* webpackChunkName: "Lore" */ /* webpackPrefetch: true */  './components/sendCredentials/SendCredentials')),
    label: 'Credentials' 
  },
  PRIVATE_AREA: {
    path: '/family/private',
    component: React.lazy(() => import( /* webpackChunkName: "Lore" */ /* webpackPrefetch: true */  './components/privateArea/PrivateArea')),
    label: 'Private area' 
  },
  PAYMENT: {
    path: '/family/payment',
    component: React.lazy(() => import( /* webpackChunkName: "AddCat" */ './components/payment/Payment')),
    label: 'Payment'
  },
}