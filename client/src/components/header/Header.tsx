import React from 'react';
import styles from './Header.module.scss'
import { familyRoutesMap } from '../../routes.config';
import { Link } from 'react-router-dom';
import LogoutBtn from '../logout/logout';

const Header = () => {

  return (
    <div>
      <ul className="navBar">
        {
          Object.keys(familyRoutesMap).map((routeKey, index) => {
            const route = familyRoutesMap[routeKey]
            return (
              <div>
                {
                  <li>
                    <Link key={index} to={route.path}>{route.label}</Link>
                  </li>
                }
              </div>
            )
          })
        }

      </ul>
      <LogoutBtn></LogoutBtn>
    </div>
  )
}

export default Header;