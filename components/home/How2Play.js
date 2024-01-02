import styles from './How2Play.module.css';

const How2Play = () => {
    return (
        <div className={styles.howToPlay}>
            <h2>How to Play</h2>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <h3>Step 1</h3>
                    <p>Description of step 1</p>
                </div>
                <div className={styles.step}>
                    <h3>Step 2</h3>
                    <p>Description of step 2</p>
                </div>
                <div className={styles.step}>
                    <h3>Step 3</h3>
                    <p>Description of step 3</p>
                </div>
                <div className={styles.step}>
                    <h3>Step 4</h3>
                    <p>Description of step 4</p>
                </div>
            </div>
        </div>
    )
}

export default How2Play
