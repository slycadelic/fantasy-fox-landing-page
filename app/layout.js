import Script from 'next/script'
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// To prevent oversized icons due to default styling.
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
    title: 'Fantasy Fox AutoRacing',
    description: 'Fantasy Fox is a Fantasy Sports Platform where users can build their own league format or choose a pre-defined format for playing the game for the entire season. Based on the format, points are awarded to the team after every game/race that takes place in the season. The unique feature that distinguishes Fantasy Foxes Sports Platform from others is the option to customize the format of the game. This allows users to dictate the required engagement level in the game. Players can create their own league and invite friends to join using their league code. Currently, the platform offers F1 as the only sport; however, it will be offering football and other sports in the near future. Also, all features are available for free for the time being. Enjoy and play well!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script src="https://app.termly.io/resource-blocker/a6f31c19-b70c-4508-9072-1d98103deafd?autoBlock=on" />
            <body className={[inter.className, ' layoutBG']}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
