import styles from './StartNow.module.css'
import PlayNow from '@/public/PlayNow.png'
import Image from 'next/image'
import mobileApp from '@/public/mobileApp2.png'

const How2Play = () => {
    return (
        <>
            {/* How to Play Section */}
            <div className={styles.PlayNow}>
                <h2>Start Playing Now </h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <Image 
                        src={PlayNow} alt='Step 1 Icon' className={styles.stepIcon} />
                        <h3>Step 1</h3>
                        <p>Description of step 1</p>
                    </div>
                    <div className={styles.step}>
                        <Image 
                        width={100}
                        height={100}
                        src={mobileApp} alt='Step 2 Icon' className={styles.stepIcon} />
                        <h3>Step 2</h3>
                        <p>Description of step 2</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default How2Play
