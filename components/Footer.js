import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../public/Title.png';
import Tech23Logo from '../public/Tech23Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div>
                <div className={styles.socials}>
                    <a href='https://www.facebook.com/groups/369119915816074' target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://twitter.com/fantasyffox' target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a target='_blank' href='https://www.instagram.com/fantasyfox_app?igsh=NTFvMGRhNWZtemk0&utm_source=qr'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a target='_blank' href='https://discord.gg/wHY3zVBa'>
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
                <div className={styles.row2}>
                    <div>
                        <a target='_blank' href='https://www.tech23gaming.com/'>
                            <Image
                                src={Tech23Logo}
                                alt='Tech 23 Gaming'
                                width={100}
                                height={80}
                            />
                        </a>
                        <a target='_blank' href='https://www.tech23gaming.com/'>
                            <span>© Tech Twenty Three Gaming LLP.</span>
                        </a>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image
                                src={Title}
                                alt='logo'
                                width={200}
                                height={80}
                            />
                        </Link>
                        <div>
                            <a target='_blank' href='https://www.freeprivacypolicy.com/live/9b665689-ca3b-443c-9c64-95ab0f0f9c87'>
                                <span>Privacy Policy</span>
                            </a>
                            <span style={{ textDecoration: 'none', padding: '0 10px' }}>|</span>
                            <a target='_blank' href='https://app.websitepolicies.com/policies/view/21qzdqeo'>
                                <span>Terms of Service</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer