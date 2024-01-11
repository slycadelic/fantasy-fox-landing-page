import styles from './StartNow.module.css';
import Image from 'next/image';
import mobileApp1 from '@/public/mobileApp4.png';
import DownloadLinks from './DownloadLinks';

import { Kelly_Slab } from 'next/font/google';
const kelly = Kelly_Slab({ subsets: ['latin'], weight: '400' });

const StartNow = () => {
    return (
        <div className={styles.PlayNow}>
            <h1 className={kelly.className}>Download Now</h1>
            <div className={styles.inner}>
                <div>
                    <DownloadLinks />
                </div>
                <div className={styles.step}>
                    <Image
                        width={400}
                        height={230}
                        src={mobileApp1}
                        alt='Mobile App'
                        className={styles.stepIcon}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default StartNow;
