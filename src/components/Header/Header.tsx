import React from 'react'

import styles from './Header.module.css'


export function Header(){

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="src\assets\to-do-logo.svg" alt="To-Do Logo" />
            </div>
        </div>
    )
}