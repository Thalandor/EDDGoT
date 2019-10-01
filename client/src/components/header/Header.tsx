import React from 'react';
import styles from './Header.module.scss'
import { familyRoutesMap } from '../../routes.config';
import { Link } from 'react-router-dom';
import LogoutBtn from '../logout/logout';

const Header = () => {

  return (
    <div className={styles.container}>
        {
          Object.keys(familyRoutesMap).map((routeKey, index) => {
            const route = familyRoutesMap[routeKey]
            return (
                <Link className="nes-btn is-primary" key={index} to={route.path}>{route.label}</Link>
            )
          })
        }

      <LogoutBtn></LogoutBtn>
    </div>
  )
}

export default Header;