import Image from 'next/image';
import BannerTitle from '@/components/BannerTitle';
import Rules from '@/components/Rules';
export default function Page() {
    return (
        <div className='mainContainer'>
            <div className='container'>
                {/* Image */}
                <div className='div-image'>
                    {/* Logo */}
                    <div className='Logo'>
                        <BannerTitle />
                    </div>

                    {/* Main Image */}
                    <Image
                        src="/Banner.jpg"
                        width={1600}
                        height={1500}
                        alt="Picture of the author"
                        layout="responsive"
                    />
                </div>

                {/* <div
                    className='Main-Links'
                >
                    <a href="/web-app-link" className='links'>
                        <button className='web-app'>
                            Web App
                        </button>
                    </a>
                    <a href="/play-store-link" className='links'>
                        <button className='play-store'>
                            Play Store
                        </button>
                    </a>
                    <a href="/app-store-link" className='links'>
                        <button className='app-store'>
                            App Store
                        </button>
                    </a>
                </div> */}

              <Rules/>
          
          
            </div>
        </div>
    );
}
