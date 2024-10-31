"use client";

import styles from "@/app/styles/header.module.css";
import Link from 'next/link';  
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.hamburger} onClick={toggleSideMenu}>&#9776;</div>
                <div className={`${styles.sideMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <div className={styles.cut} onClick={toggleSideMenu}>&times;</div>
                    <ul>
                        <li><Link onClick={toggleSideMenu} href='/'>Home</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/about'>About</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/Contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.name}>
                    Lama
                </div>
                <ul className={styles.navigation}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </nav>  
        </div>
    );
}

export default Header;
