import React from 'react'
import s from './navigation.module.scss'

const Navigation = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li><a href="/" className={s.nav__link}><i className="fas fa-cog"></i></a></li>
                    <li><a href="/" className={s.nav__link}><i className="fas fa-user-friends"></i></a></li>
                    <li><a href="/" className={s.nav__link}><i className="fas fa-comments"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;