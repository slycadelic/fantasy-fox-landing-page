import FantasyFoxsvg from './FantasyFoxsvg.js';
import Helmetsvg from './Helmetsvg.js';
import styles from './How2Play.module.css';
import React from 'react';

const How2Play = (props) => {

    // TODO: 
    // Add fonts to heading p (second child) and text p (third child).
    // Add images under p and give styling (background color).
    // Step1: League tyre svg's.
    // Step2: League Icon and league table pic.
    // Step3: Driver helmet svg's and Race Car SVG.
    // Step4: Bonus Chip Pics and Race Flag Pic.

    return (
        <div className={styles.howToPlay}>
            <h3>How to Play</h3>
            <div className={styles.steps}>
                <div>
                    <span>Step 1</span>
                    <p>Select League Format</p>
                    <p>Select a pre-defined format (Soft, Medium, Hard) or customize and create your own custom league.</p>
                    <div className={styles.tyres}>
                        <FantasyFoxsvg stroke='rgb(255, 53, 53)' className='rotateTyre' />
                        <FantasyFoxsvg stroke='rgb(255, 255, 0)' className='rotateTyre' />
                        <FantasyFoxsvg stroke='rgb(205, 205, 205)' className='rotateTyre' />
                    </div>
                </div>
                <div>
                    <span>Step 2</span>
                    <p>Join/Create a League</p>
                    <p>Create a new league or join existing leagues of the same format.</p>
                </div>
                <div>
                    <span>Step 3</span>
                    <p>Create New Team</p>
                    <p>Select drivers and a team principal based on the league selection system.</p>
                    {/* Driver Helmet x3 */}
                    <div className={styles.tyres}>
                        <Helmetsvg color1={'red'} color2={'blue'} />
                        <Helmetsvg color1={'orange'} color2={'green'}/>
                        <Helmetsvg color1={'grey'} color2={'black'} />
                    </div>
                </div>
                <div>
                    <span>Step 4</span>
                    <p>Manage Team and win points</p>
                    <p>Make transfers every race week and use special chips to gain bonus points.</p>
                </div>
            </div>
        </div>
    )
}

export default How2Play
