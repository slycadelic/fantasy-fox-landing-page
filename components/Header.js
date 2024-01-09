'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Title from '../public/Title.png';
import styles from './Navbar.module.css';
import useWindowScroll from "@/hooks/useWindowScroll";

const Header = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const scrollY = useWindowScroll();
    const backgroundColor = `rgba(0,0,0,${scrollY / 500})`;
    let pathname = usePathname() || '/';

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

    if (pathname.includes("/Contact/")) {
        pathname = "/Contact";
    }
    const [activeLink, setActiveLink] = useState(links.find(link => link.href === pathname)?.id);

    // const [hoveredPath, setHoveredPath] = useState(pathname);

    const handleLinkClick = (id, href) => {
        setActiveLink(id);
        setNav(false);
        router.push(href);
    };

    return (
        <div className={styles.header} style={{ backgroundColor }}>
            <Link href='/' onClick={() => handleLinkClick(1, '/')}>
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
                        <Link href={href}>
                            <motion.div
                                className={styles.navLink}
                                whileHover={{ scale: 1.1, color: 'rgb(126,125,124)' }} // Scale up and change color on hover
                                whileTap={{ scale: 0.9 }} // Scale down on click
                                onClick={() => handleLinkClick(id, href)}
                                initial={{ borderBottom: "2px solid transparent" }} // Initial state of underline
                                animate={{ borderBottom: activeLink === id ? "2px solid white" : "2px solid transparent" }} // Animate underline
                            >
                                {link}
                            </motion.div>
                        </Link>
                    </li>
                ))}
            </ul>
            <span style={{ width: '120px' }} />
            <div onClick={() => setNav(!nav)} className={styles.mobileNavIcon}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className={styles.mobileNavLinks}>
                    {links.map(({ id, link, href }) => (
                        <li key={id}>
                            <Link href={href}>
                                <motion.a
                                    className={styles.navLink}
                                    whileTap={{ scale: 0.9 }} // Scale down on click
                                    onClick={() => handleLinkClick(id, href)}
                                >
                                    {link}
                                </motion.a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header;
