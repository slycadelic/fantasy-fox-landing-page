'use client'

import styles from './LeagueFormat.module.css';
import { useRef } from 'react';

const LeagueFormat = () => {

    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);
    const step5Ref = useRef(null);

    const scrollToElement = (ref) => {
        ref.scrollIntoView({
            behavior: "smooth",
            inline: 'center',
            block: 'nearest'
        });
    };

    return (
        <div className={styles.LeagueFormat}>
            <h2>League Formats</h2>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step1Ref.current)} className={styles.btn}> Soft
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step2Ref.current)} className={styles.btn}>Step2
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step3Ref.current)} className={styles.btn}> Step3
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step4Ref.current)} className={styles.btn}>Step4
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step5Ref.current)} className={styles.btn}>Step5
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={styles.steps}>
                <div className={styles.scrollContainer}>
                    <div ref={step1Ref} className={styles.step}>
                        <p>Soft Format</p>
                        The Soft Format is a pre-defined league format that has a budget based selection strategy; it allows users to pick drivers while staying within a fixed allocated budget of $100M. Driver Prices are set based on their performance.
                        The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
                        A team created in this format can join multiple leagues of the same format.
                    </div>
                    <div ref={step2Ref} className={styles.step}>
                        <h3>Step 2</h3>
                        <p>Description of step 2</p>
                    </div>
                    <div ref={step3Ref} className={styles.step}>
                        <h3>Step 3</h3>
                        <p>Description of step 3</p>
                    </div>
                    <div ref={step4Ref} className={styles.step}>
                        <h3>Step 4</h3>
                        <p>Description of step 4</p>
                    </div>
                    <div ref={step5Ref} className={styles.step}>
                        <h3>Step 5</h3>
                        <p>Description of step 5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueFormat;
