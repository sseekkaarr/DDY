import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Image
        src="/img/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className={styles.logo}
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/content-library">Content Library</Link>
        <Link href="/activity-catalog">Activity Catalog</Link>
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
