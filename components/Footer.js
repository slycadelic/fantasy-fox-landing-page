'use client'

import React from 'react'
import Styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../public/Title.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
        <section className={Styles.footer}>
            <div className={Styles.footerContent}>
                <div className={Styles.logo}>
            <Link href='/'> {/* Adjust the 'href' for the home link */}
                <Image
                    src={Title}
                    alt='logo'
                    width={150}
                    height={80}
                    className='object-contain'
                />
            </Link>

            <div className={Styles.socialsContainer}>
            <Link href='/' className={Styles.socials}>
                            <FontAwesomeIcon  className=' h-8' icon={faFacebook} />
                        </Link>
                        <Link href='/' className={Styles.socials}>
                            <FontAwesomeIcon className='h-8' icon={faTwitter} />
                        </Link>
                        <Link href='/' className={Styles.socials} >
                            <FontAwesomeIcon className='h-8' icon={faInstagram} />
                        </Link>
                        <Link href='/' className={Styles.socials}>
                            <FontAwesomeIcon className='h-8' icon={faLinkedin} />
                        </Link>

            </div>
            </div>


            <div className={Styles.footnote} >
                THis is the Description of the The Landing Page 
            </div>
            <div className={Styles.footerSubUnit}>
                <div className={Styles.copyrightText}> CopyRight Text  </div>
                <div className={Styles.menuContainer}>
                    <Link href='/'>Support</Link>
                    <Link href='/'>Privacy Policy</Link>
                    <Link href='/'>Terms of Use </Link>
                    <Link href='/'>Responsible Play </Link>
                    <Link href='/'>Unofficial Application</Link>

                </div>
            </div>
            </div>

          

        </section>
        
        </>
       
    )
}

export default Footer