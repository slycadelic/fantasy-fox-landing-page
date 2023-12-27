import Image from 'next/image';
import BannerTitle from '@/components/BannerTitle';

export default function Page() {
    return (
        <div className='mainContainer'>
            <div style={{ maxWidth: '1000px', width: '100%', padding: '20px', position: 'relative' }}>
                {/* Image */}
                <div style={{ position: 'relative', padding: '10px' }}>
                    {/* Logo */}
                    <div style={{ position: 'absolute', top: '0px', left: '10px', zIndex: 10 }}>
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

                {/* Links */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '20%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        width: '80%',
                        maxWidth: '200px',
                    }}
                >
                    {/* Web App Link */}
                    <a href="/web-app-link" style={{ textDecoration: 'none', width: '100%' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                            Web App
                        </button>
                    </a>
                    {/* Play Store Link */}
                    <a href="/play-store-link" style={{ textDecoration: 'none', width: '100%' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                            Play Store
                        </button>
                    </a>
                    {/* App Store Link */}
                    <a href="/app-store-link" style={{ textDecoration: 'none', width: '100%' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                            App Store
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
