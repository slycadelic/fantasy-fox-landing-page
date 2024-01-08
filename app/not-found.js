import Link from 'next/link';
import styles from './home.module.css';
import NotFoundImage from '@/public/404.jpg'; // Import your 404 image component or specify the image source directly
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className={styles.imageWrapper}>
        <Image src={NotFoundImage} alt="Not Found" width={600} height={400} />
      </div> {/* Add your 404 image */}
      <Link href="/">
        <button className={styles.button}>Return Home</button>
      </Link>
    </div>
  )
}
