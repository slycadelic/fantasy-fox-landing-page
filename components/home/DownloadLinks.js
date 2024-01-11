import Image from 'next/image';
import styles from './Banner.module.css';
import PlayStore from '@/public/downloadApp2.png'
import AppStore from '@/public/downloadApp3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const DownloadLinks = () => {
    return (
        <>
            <a href="/web-app-link" className={styles.links}>
                <button>
                    <span>Play Now</span>
                    <FontAwesomeIcon icon={faPlay} size={'xl'} />
                </button>
            </a>
            <a href="/play-store-link" className={styles.links}>
                <button>
                    <Image
                        src={PlayStore}
                        alt={'Android App'}
                        width={155}
                        height={48}
                        className={styles.linkImage}
                    />
                </button>
            </a>
            <a href="/app-store-link" className={styles.links}>
                <button>
                    <Image
                        src={AppStore}
                        alt={'ios App'}
                        width={155}
                        height={48}
                    />
                </button>
            </a>
        </>
    )
}

export default DownloadLinks