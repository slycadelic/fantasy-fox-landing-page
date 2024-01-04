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
                        <button onClick={() => scrollToElement(step1Ref.current)} className={styles.btn}> <span className='text-[rgb(255,53,53)] '>Soft</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step2Ref.current)} className={styles.btn}><span className='text-[rgb(255,255,0)]'>Medium</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step3Ref.current)} className={styles.btn}><span className='text-[rgb(205,205,205)]'>Hard</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step4Ref.current)} className={styles.btn}><span className='text-[rgb(49,145,255)]'>Custom</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button onClick={() => scrollToElement(step5Ref.current)} className={styles.btn}><span className='text-[rgb(255,100,0)]'>Contest</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={styles.steps}>
                <div className={styles.scrollContainer}>
                    <div ref={step1Ref} className={styles.step}>
                        <h3>Soft Format</h3>
                        The Soft Format is a pre-defined league format that has a budget based selection strategy; it allows users to pick drivers while staying within a fixed allocated budget of $100M. Driver Prices are set based on their performance.
                        The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
                        A team created in this format can join multiple leagues of the same format.
                    </div>
                    <div ref={step2Ref} className={styles.step}>
                        <h3>Medium Format</h3>
                        <p>The Medium Format is a pre-defined league format that has a contracts based selection strategy; allocates race contracts for all drivers (based on the number of races). Users use the race contracts to pick drivers for each race and are forced to transfer them out when a driver runs out of race contracts.
Failing to transfer them out will result in no points being awarded for that driver.
The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
A team created in this format can join multiple leagues of the same format</p>
                    </div>
                    <div ref={step3Ref} className={styles.step}>
                        <h3>Hard Format</h3>
                        <p>The Hard Format is a pre-defined league format that takes both contracts and budget into account for the selection strategy.
Therefore, while users have to stay within the budget of $100M, they are also required to use race contracts to pick drivers in each race; and not be allowed to pick drivers with no contracts left or go over the budget at any point.
The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
A team created in this format can join multiple leagues of the same format.</p>
                    </div>
                    <div ref={step4Ref} className={styles.step}>
                        <h3>Custom Format</h3>
                        <p>The Hard Format is a pre-defined league format that takes both contracts and budget into account for the selection strategy.
Therefore, while users have to stay within the budget of $100M, they are also required to use race contracts to pick drivers in each race; and not be allowed to pick drivers with no contracts left or go over the budget at any point.
The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
A team created in this format can join multiple leagues of the same format.</p>
                    </div>
                    <div ref={step5Ref} className={styles.step}>
                        <h3>Contest Format</h3>
                        <p>The Contest League is a special type of global league that is created for every race and is applicable for that round only.
The league format is similar to the Soft format where you have a budget to create a team. The scoring system is standard but no chips are available to use.
Joining a contest league for a round requires creating a new team for that round. Joining other leagues with that team is not permitted.
Since the contest league is different for each round, creating a new team is required for each round and selections from the previous rounds are not applicable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueFormat;
