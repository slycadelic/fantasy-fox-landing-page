import Image from 'next/image';
import BannerTitle from '@/components/home/BannerTitle';
import How2Play from '@/components/home/How2Play';
import styles from './home.module.css';
import LeagueFormats from '@/components/home/LeagueFormats'
import StartNow from '@/components/home/StartNow'
import PlayStore from '@/public/downloadApp2.png'
import AppStore from '@/public/downloadApp3.png'
import PlayNow from '@/public/PlayNow.png'


export default function Page() {

    return (
        <>
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
                
                <div
                    className={styles.MainLinks}
                >
                    <a href="/web-app-link" className={styles.links}>
                        <button className={styles.webApp}>
                        <Image  
                            src={PlayNow}
                            />
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
                <How2Play />


                <LeagueFormats />

                <StartNow />
            </div>
        </div>
        </>
    );
}
