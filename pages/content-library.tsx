import Header from '../components/Header';
import styles from "../styles/ContentLibrary.module.scss";

const ContentLibrary = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}> Content Library</h1>
        <p className={styles.description}>
          Oops! Looks like this feature is still brewing. Please check back later!
        </p>
      </main>
    </>
  );
};

export default ContentLibrary;