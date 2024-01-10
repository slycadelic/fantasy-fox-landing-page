import Image from 'next/image.js';
import FantasyFoxsvg from './FantasyFoxsvg.js';
import Helmetsvg from './Helmetsvg.js';
import mobilePic from '../../public/mobileApp3.png';
import boosterChip from '../../public/boosterChip.png';
// import wildcardChip from '../../public/wildcardChip.png';
import styles from './How2Play.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers, faUserPlus, faUsersRectangle,
    faArrowRightArrowLeft, faTrophy,
    faFlagCheckered
} from '@fortawesome/free-solid-svg-icons';

import { Kelly_Slab, Crimson_Pro } from 'next/font/google';
const kelly = Kelly_Slab({ subsets: ['latin'], weight: '400' });
const crimsonPro = Crimson_Pro({ subsets: ['latin'] });

const How2Play = () => {

    return (
        <div className={styles.howToPlay}>
            <span className={kelly.className}>
                How to Play
            </span>
            <div className={styles.steps}>
                <div className={crimsonPro.className}>
                    <h1>
                        Step 1
                    </h1>
                    <h2>Select a league format</h2>
                    <p>Select a pre-defined format (Soft, Medium, Hard) or customize the format and create your own custom league.</p>
                    <div>
                        <FantasyFoxsvg stroke='rgb(255, 53, 53)' className='rotateTyre' />
                        <FantasyFoxsvg stroke='rgb(255, 255, 0)' className='rotateTyre' />
                        <FantasyFoxsvg stroke='rgb(205, 205, 205)' className='rotateTyre' />
                    </div>
                </div>
                <div className={crimsonPro.className}>
                    <h1>
                        Step 2
                    </h1>
                    <h2>Join/Create Leagues</h2>
                    <p>Create a new league or join existing leagues of the same format.</p>
                    <div>
                        <FontAwesomeIcon icon={faUsers} size={'xl'} color={'white'} />
                        <FontAwesomeIcon icon={faUserPlus} size={'xl'} color={'limegreen'} />
                        <FontAwesomeIcon icon={faUsersRectangle} size={'2xl'} color={'white'} />

                    </div>
                </div>
                <div className={crimsonPro.className}>
                    <h1>
                        Step 3
                    </h1>
                    <h2>Create New Team</h2>
                    <p>Select drivers and a team principal based on the league selection system.</p>
                    <div>
                        <Helmetsvg color1={'blue'} color2={'teal'} />
                        <Helmetsvg color1={'white'} color2={'red'} />
                        <Helmetsvg color1={'black'} color2={'yellow'} />
                    </div>
                </div>
                <div className={crimsonPro.className}>
                    <h1>
                        Step 4
                    </h1>
                    <h2>Manage Team | Score points</h2>
                    <p>Make transfers every race week and use special chips to gain bonus points.</p>
                    <div>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} size={'xl'} color={'white'} />
                        <Image src={boosterChip} width={50} height={'auto'} alt='Booster Chip' />
                        <FontAwesomeIcon icon={faFlagCheckered} size={'xl'} color={'white'} className={styles.flagIcon} />
                        <FontAwesomeIcon icon={faTrophy} size={'xl'} color={'gold'} />
                    </div>
                </div>
            </div>
            <Image
                src={mobilePic}
                width={400}
                height={'auto'}
                alt={'Fantasy Fox Mobile App'}
                className={styles.mobilePic}
            />
        </div>
    )
}

export default How2Play
