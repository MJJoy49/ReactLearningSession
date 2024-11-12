import React from 'react'
import styles from './Header.module.css';
import { RiCalendarTodoLine } from "react-icons/ri";
import { GiNightSky } from "react-icons/gi";

function Header() {
    return (
        <>
            <div className={styles.HeaderContainer}>
                <RiCalendarTodoLine className={styles.Logoformat} />
                <h1 className={styles.colorWhite}>TODO APP</h1>
                <GiNightSky className={styles.DarkMood} />

            </div>
        </>
    )
}

export default Header
