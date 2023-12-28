'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Title from '../public/Title.png';
import styles from './Navbar.module.css';

const Header = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
            href: '/'
        },
        {
            id: 2,
            link: "How To Play",
            href: 'how2play'
        },
        {
            id: 3,
            link: "F1 Standings",
        },
        {
            id: 4,
            link: "Contact",
        },
    ];

    return (
        <div className={styles.header}>
            <Link href='/' className='flex gap-2'>
                <Image
                    src={Title}
                    alt='logo'
                    width={100}
                    height={60}
                    className='object-contain'
                />
            </Link>
            <ul className="hidden md:flex mx-auto">
                {links.map(({ id, link, href }) => (
                    <li
                        key={id}
                        className={styles.navLinks}
                    >
                        <Link href='/'>{link}</Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className={styles.mobileNavLinks}>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
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