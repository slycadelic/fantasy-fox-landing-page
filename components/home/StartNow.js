import styles from './StartNow.module.css'

const How2Play = () => {
    return (
        <>
            {/* How to Play Section */}
            <div className={styles.PlayNow}>
                <h2>Start Playing Now </h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <img src='/step1-icon.png' alt='Step 1 Icon' className={styles.stepIcon} />
                        <h3>Step 1</h3>
                        <p>Description of step 1</p>
                    </div>
                    <div className={styles.step}>
                        <img src='/step2-icon.png' alt='Step 2 Icon' className={styles.stepIcon} />
                        <h3>Step 2</h3>
                        <p>Description of step 2</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default How2Play
