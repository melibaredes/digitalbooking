import React from 'react'
import styles from '../Styles/header.module.scss'
import logo from '../assets/logo 1.svg'
export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.container} >
                <a className={styles.link} href='#home'><img src={logo} alt="Logo"/></a>
                <p><a className={styles.link} href='#home'>Sentite como en tu hogar</a></p>
            </div>
            <div className={styles.container}>
                <button className={styles.logginButton}>Crear cuenta</button>
                <button className={styles.logginButton}>Iniciar sesión</button>
            </div>
        </header>
    )
    
}