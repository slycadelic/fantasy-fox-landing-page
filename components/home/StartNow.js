import styles from './StartNow.module.css';
import PlayNow from '@/public/PlayNow.png';
import Image from 'next/image';
import mobileApp1 from '@/public/mobileApp4.png';
import PlayStore from '@/public/downloadApp2.png';
import AppStore from '@/public/downloadApp3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const How2Play = () => {
    return (
        <>
            {/* How to Play Section */}
            <div className={styles.PlayNow}>
                <h2>Start Playing Now </h2>
                <div className={styles.steps}>
                        <a href="/web-app-link" className={styles.links}>
                            <button className={styles.webApp}>
                                <span>Play Now</span>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </a>
                        <a href="/play-store-link" className={styles.links}>
                            <button className={styles.playStore}>
                                <Image
                                    src={PlayStore}
                                    alt={'ios App'}
                                    width={155}
                                    height={48}
                                    quality={100}
                                />
                            </button>
                        </a>
                        <a href="/app-store-link" className={styles.links}>
                            <button className={styles.appStore}>
                                <Image
                                    src={AppStore}
                                    alt={'ios App'}
                                    width={155}
                                    height={48}
                                    quality={100}
                                />
                            </button>
                        </a>
                        <div className={styles.step}>
                        <Image
                            width={450}
                            height={250}
                            src={mobileApp1}
                            alt='Mobile App'
                            className={styles.stepIcon}
                            quality={100}
                        />
                    </div>
                    </div>
                   
                </div>
        </>
    )
}

export default How2Play;
