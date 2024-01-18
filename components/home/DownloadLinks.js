import Image from 'next/image';
import styles from './Banner.module.css';
import PlayStore from '@/public/downloadApp2.png'
import AppStore from '@/public/downloadApp3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Kelly_Slab } from 'next/font/google';
const kelly = Kelly_Slab({ subsets: ['latin'], weight: '400' });

const DownloadLinks = () => {
    return (
        <>
            <a href="https://play.google.com/store/apps/details?id=com.fantasyfoxautoracing&pcampaignid=web_share" target='_blank' className={styles.links}>
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
            <a href="https://www.fantasyfox.app/" target='_blank' className={styles.links}>
                <button>
                    <span className={kelly.className}>Play Now</span>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </a>
        </>
    )
}

export default DownloadLinks