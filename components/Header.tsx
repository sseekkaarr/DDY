import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/img/logo.png" alt="Logo" width={50} height={50} className={styles.logo} />
      <nav className={styles.menu}>
        <Link href="/content-library">Content Library</Link>
        <Link href="/activity-catalog">Activity Catalog</Link>
        <Link href="/profile">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
