'use client'

import Image from 'next/image';
import BannerTitle from '@/components/home/BannerTitle';
import useWindowSize from "@/hooks/useWindowSize";
import styles from './Banner.module.css';
import PlayStore from '@/public/downloadApp2.png'
import AppStore from '@/public/downloadApp3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {

    const size = useWindowSize();

    return (
        <div className={styles.divImage}>
            {/* Logo */}
            <div className={styles.Logo} style={{ width: (size.width > 600) ? '350px' : '200px' }}>
                <BannerTitle />
            </div>
            {/* Main Image */}
            {(size.width > 600)
                ? (
                    <Image
                        src="/Banner.jpg"
                        width={1600}
                        height={800}
                        alt="Main Banner"
                    />
                ) : (
                    <Image
                        src="/mobileBanner.jpg"
                        width={size.width}
                        height={800}
                        alt="Main Banner"
                    />
                )
            }
            <div
                className={styles.MainLinks}
            >
                <a href="/web-app-link" className={styles.links}>
                    <button className={styles.webApp}>
                        <FontAwesomeIcon className='h-5 mr-1' icon={faPlay} />
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
        </div>
    )
}

export default Banner