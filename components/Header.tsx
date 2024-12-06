import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Cek status login

  return (
    <header className={styles.header}>
      {/* Klik logo untuk redirect ke homepage */}
      <Image
        src="/img/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className={styles.logo}
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />
      <nav className={styles.menu}>
        {/* Link ke halaman Content Library */}
        <Link href="/content-library">Content Library</Link>
        
        {/* Link ke halaman Activity Catalog */}
        <Link href="/activity-catalog">Activity Catalog</Link>
        
         {/* Link ke Login atau Profile */}
         {session ? (
          <Link href="/profile">Profile</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
