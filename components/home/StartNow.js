import styles from './StartNow.module.css'
import PlayNow from '@/public/PlayNow.png'
import Image from 'next/image'
import mobileApp from '@/public/mobileApp2.png'
import PlayStore from '@/public/downloadApp2.png'
import AppStore from '@/public/downloadApp3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";



const How2Play = () => {
    return (
        <>
            {/* How to Play Section */}
            <div className={styles.PlayNow}>
                <h2>Start Playing Now </h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <a href="/web-app-link" className={styles.links}>
                            <button className={styles.play}>

                                <FontAwesomeIcon className='h-8 mr-2' icon={faPlay} />
                                Play Now

                            </button>
                        </a>
                        <a href="/play-store-link" className={styles.links}>
                            <button className={styles.playStore}>
                                <Image
                                    src={PlayStore}
                                />
                            </button>
                        </a>
                        <a href="/app-store-link" className={styles.links}>
                            <button className={styles.appStore}>
                                <Image
                                    src={AppStore}
                                />
                            </button>
                        </a>
                    </div>
                    <div className={styles.step}>
                        <Image
                            width={100}
                            height={100}
                            src={mobileApp} alt='Step 2 Icon' className={styles.stepIcon} />

                    </div>

                </div>
            </div>
        </>
    )
}

export default How2Play
