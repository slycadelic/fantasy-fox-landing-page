'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Title from '../public/Title.png';
import styles from './Navbar.module.css';
import useWindowScroll from "@/hooks/useWindowScroll";

const Header = () => {

    const [nav, setNav] = useState(false);
    const scrollY = useWindowScroll();
    const[background,setBackground] = useState()
    console.log(Math.round(scrollY))


    // TODO: Using a hook to get window scroll position, change the opacity of the navbar's background color. 
    // Increasing as we scroll down.

    const links = [
        {
            id: 1,
            link: "home",
            href: '/'
        },
        {
            id: 2,
            link: "How To Play",
            href: '/HowToPlay'
        },
        {
            id: 3,
            link: "F1 Standings",
            href: '/F1Standing'
        },
        {
            id: 4,
            link: "Contact",
            href: '/Contact'
        },
    ];

    return (
        <div className={styles.header}>
            <Link href='/'>
                <Image
                    src={Title}
                    alt='logo'
                    width={120}
                    height={60}
                />
            </Link>
            <ul className={styles.navLinks}>
                {links.map(({ id, link, href }) => (
                    <li key={id}>
                        <Link href={href}>{link}</Link> {/* Use 'href' from the array */}
                    </li>
                ))}
            </ul>
            <span style={{ width: '120px' }} />
            <div onClick={() => setNav(!nav)} className={styles.mobileNavIcon}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className={[styles.mobileNavLinks]}>
                    {links.map(({ id, link, href }) => (
                        <li key={id}>
                            <Link onClick={() => setNav(!nav)} href={href}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header;
