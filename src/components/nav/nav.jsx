import styles from './nav.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.Nav}>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Products</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav