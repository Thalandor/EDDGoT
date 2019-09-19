import React from 'react';
import styles from './Header.module.scss'
import { routesMap } from '../../routes.config';
import { Link } from 'react-router-dom';

const Header = () =>{

    return (
        <ul className="navBar">
          {
            Object.keys(routesMap).map((routeKey, index) => {
              const route = routesMap[routeKey]
              return (
                <li key={index}>
                  <Link to={route.path}>{route.label}</Link>
                </li>
              )
            })
          }
        </ul>
    )
}

export default Header;