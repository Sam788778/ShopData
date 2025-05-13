import React from 'react'
import styles from './container.module.css'
import Nav from '../nav/nav.jsx'
import { Outlet } from 'react-router-dom'

const Container = () => {
    return (
        <div className={styles.container}>
            <Nav />
            <Outlet />
        </div>
    )
}

export default Container