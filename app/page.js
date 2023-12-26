import Image from 'next/image';

export default function Page() {
  return (
    <div>
      {/* Image */}
      <Image
      className='max-w-full '
        src="/Banner.jpg"
        width={1600}
        height={500}
        alt="Picture of the author"
      />

      {/* Links */}
      <div
      className='lg:w-[40px] md:w-[30px] sm:w-[10px] '
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          gap: '10px',
        
        }}
      >
        {/* Web App Link */}
        <a href="/web-app-link" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Web App
          </button>
        </a>

        {/* Play Store Link */}
        <a href="/play-store-link" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Play Store
          </button>
        </a>

        {/* App Store Link */}
        <a href="/app-store-link" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            App Store
          </button>
        </a>
      </div>
    </div>
  );
}
