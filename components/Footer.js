import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../public/Title.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div>
                <div className={styles.row1}>
                    <Link href='/'>
                        <Image
                            src={Title}
                            alt='logo'
                            width={150}
                            height={80}
                        />
                    </Link>
                    <div>
                        <Link href='/' className={styles.socials}>
                            <FontAwesomeIcon className=' h-8' icon={faFacebook} />
                        </Link>
                        <Link href='/' className={styles.socials}>
                            <FontAwesomeIcon className='h-8' icon={faTwitter} />
                        </Link>
                        <Link href='/' className={styles.socials} >
                            <FontAwesomeIcon className='h-8' icon={faInstagram} />
                        </Link>
                        <Link href='/' className={styles.socials}>
                            <FontAwesomeIcon className='h-8' icon={faLinkedin} />
                        </Link>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div>
                        Under Development
                    </div>
                    <div>
                        <div>Tech 23 Gaming</div>
                        <div>
                            <Link href='/'>Support</Link>
                            <Link href='/'>Privacy Policy</Link>
                            <Link href='/'>Terms of Use </Link>
                            <Link href='/'>Responsible Play </Link>
                            <Link href='/'>Unofficial Application</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer