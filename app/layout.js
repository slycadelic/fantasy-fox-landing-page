import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/public/Banner.jpg'
import Image from 'next/image';
import styles from '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Fantasy Fox AutoRacing',
    description: 'Fantasy Fox is a Fantasy Sports Platform where users can build their own league format or choose a pre-defined format for playing the game for the entire season. Based on the format, points are awarded to the team after every game/race that takes place in the season. The unique feature that distinguishes Fantasy Foxes Sports Platform from others is the option to customize the format of the game. This allows users to dictate the required engagement level in the game. Players can create their own league and invite friends to join using their league code. Currently, the platform offers F1 as the only sport; however, it will be offering football and other sports in the near future. Also, all features are available for free for the time being. Enjoy and play well!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={[inter.className, ' layoutBG']}>
               
                <Header />
                
             
            {children}

                <Footer />
            </body>
        </html>
    )
}
