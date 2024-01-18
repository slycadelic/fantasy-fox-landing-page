'use client'

import Image from 'next/image';
import BannerTitle from '@/components/home/BannerTitle';
import useWindowSize from "@/hooks/useWindowSize";
import styles from './Banner.module.css';

const Banner = () => {

    const size = useWindowSize();

    return (
        <div className={styles.divImage}>
            <div className={styles.Logo} style={{ width: (size.width > 600) ? '350px' : '200px' }}>
                <BannerTitle />
            </div>
            {(size.width > 900)
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
        </div>
    )
}

export default Banner