import Image from 'next/image';
import BannerTitle from '@/components/home/BannerTitle';
import How2Play from '@/components/home/How2Play';
import styles from './home.module.css';

export default function Page() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                {/* Image */}
                <div className={styles.divImage}>
                    {/* Logo */}
                    <div className={styles.Logo}>
                        <BannerTitle />
                    </div>
                    {/* Main Image */}
                    <Image
                        src="/Banner.jpg"
                        width={1600}
                        height={1500}
                        alt="Main Banner"
                    />
                </div>
                {/* <div
                    className='Main-Links'
                >
                    <a href="/web-app-link" className='links'>
                        <button className='web-app'>
                            Web App
                        </button>
                    </a>
                    <a href="/play-store-link" className='links'>
                        <button className='play-store'>
                            Play Store
                        </button>
                    </a>
                    <a href="/app-store-link" className='links'>
                        <button className='app-store'>
                            App Store
                        </button>
                    </a>
                </div> */}
                <How2Play />
            </div>
        </div>
    );
}
