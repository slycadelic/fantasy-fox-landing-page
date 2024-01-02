import styles from './LeagueFormat.module.css';

const How2Play = () => {
    return (
        <>
            {/* How to Play Section */}
            <div className={styles.LeagueFormat}>
                <h2>League Formats</h2>
                <div className={styles.steps}>
                    <div className={styles.scrollContainer}>
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
                        <div className={styles.step}>
                            <h3>Step 5</h3>
                            <p>Description of step 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default How2Play;
