'use client'

import styles from './LeagueFormat.module.css';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const LeagueFormat = () => {
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);
    const step5Ref = useRef(null);

    const [activeLink, setActiveLink] = useState(null);
    const router = useRouter();

    const scrollToElement = (ref, id) => {
        setActiveLink(id);
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: 'center',
            block: 'nearest'
        });
    };

    return (
        <div className={styles.LeagueFormat}>
            <h2>League Formats</h2>
            <nav>
                <div className={styles.nav}>
                    <li className={styles.soft}>
                        <button
                            onClick={() => scrollToElement(step1Ref, 1)}
                            className={`${styles.btn} ${activeLink === 1 ? styles.active : ''}`}
                        >
                            <span className='text-[color:var(--softFormat)]'>Soft</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            onClick={() => scrollToElement(step2Ref, 2)}
                            className={`${styles.btn} ${activeLink === 2 ? styles.active : ''}`}
                        >
                            <span className='text-[color:var(--mediumFormat)]'>Medium</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            onClick={() => scrollToElement(step3Ref, 3)}
                            className={`${styles.btn} ${activeLink === 3 ? styles.active : ''}`}
                        >
                            <span className='text-[color:var(--hardFormat)]'>Hard</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            onClick={() => scrollToElement(step4Ref, 4)}
                            className={`${styles.btn} ${activeLink === 4 ? styles.active : ''}`}
                        >
                            <span className='text-[color:var(--customFormat)]'>Custom</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button
                            onClick={() => scrollToElement(step5Ref, 5)}
                            className={`${styles.btn} ${activeLink === 5 ? styles.active : ''}`}
                        >
                            <span className='text-[color:var(--contestFormat)]'>Contest</span>
                        </button>
                    </li>
                </div>
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
                        The Medium Format is a pre-defined league format that has a contracts based selection strategy; allocates race contracts for all drivers (based on the number of races). Users use the race contracts to pick drivers for each race and are forced to transfer them out when a driver runs out of race contracts.
Failing to transfer them out will result in no points being awarded for that driver.
The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
A team created in this format can join multiple leagues of the same format.
                    </div>
                    <div ref={step3Ref} className={styles.step}>
                        <h3>Hard Format</h3>
                        The Hard Format is a pre-defined league format that takes both contracts and budget into account for the selection strategy.
Therefore, while users have to stay within the budget of $100M, they are also required to use race contracts to pick drivers in each race; and not be allowed to pick drivers with no contracts left or go over the budget at any point.
The Scoring system, Bonus Points, wildcards and transfer rules in this format are standard. (Details can be found in the Rules section).
A team created in this format can join multiple leagues of the same format.
                    </div>
                    <div ref={step4Ref} className={styles.step}>
                        <h3>Custom Format</h3>
                        The Custom Format can be used to create a private league where users can select any selection strategy, customize the scoring system and modify the transfer rules and transfer deadline to their preference.
However, leagues of the 'Custom' format are private leagues by default and the league access cannot be changed.
Teams created in a custom format league cannot join additional leagues. Friends can join a custom league using the League code only, as private leagues are not searchable from the Leagues Tab.
                    </div>
                    <div ref={step5Ref} className={styles.step}>
                        <h3>Contest Format</h3>
                        The Contest League is a special type of global league that is created for every race and is applicable for that round only.
The league format is similar to the Soft format where you have a budget to create a team. The scoring system is standard but no chips are available to use.
Joining a contest league for a round requires creating a new team for that round. Joining other leagues with that team is not permitted.
Since the contest league is different for each round, creating a new team is required for each round and selections from the previous rounds are not applicable
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueFormat;
