'use client'

import How2Play from '@/components/home/How2Play';
import styles from './home.module.css';
import LeagueFormats from '@/components/home/LeagueFormats'
import StartNow from '@/components/home/StartNow';
import Banner from '@/components/home/Banner';

export default function Page() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Banner />
                <How2Play />
                <LeagueFormats />
                <StartNow />
            </div>
        </div>
    );
}
