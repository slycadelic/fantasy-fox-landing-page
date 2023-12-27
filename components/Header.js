'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Title from '../public/Title.png'

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
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className="header">
            {/* <div>
        <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </h1>
      </div> */}
            <Link href='/' className='flex gap-2 '>
                <Image
                    src={Title}
                    alt='logo'
                    width={100}
                    height={60}
                    className='object-contain'
                />
            </Link>
            <ul className="hidden md:flex   mx-auto">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links"
                    >
                        <Link href={link}>{link}</Link>
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
                <ul className="mobile-nav-links">
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