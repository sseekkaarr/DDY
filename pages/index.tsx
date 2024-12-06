import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';

const Home = () => {
  const { data: session } = useSession(); // Cek status login
  const router = useRouter();
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuizRedirect = () => {
    if (session) {
      // Jika user sudah login, redirect ke halaman quiz
      router.push("/quiz");
    } else {
      // Jika belum login, tampilkan alert
      alert("Please log in to take the quiz.");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Landing Section */}
        <section className={styles.landing}>
          <div className={styles.textContainer}>
            <h1>Take Charge of Your Well-being, One Step at a Time</h1>
            <p>Personalized self-care solutions for your mental and physical health</p>
            <button onClick={scrollToFeatures}>Start Your Journey</button>
          </div>
        </section>

        {/* Features Overview */}
        <section ref={featuresRef} className={styles.features}>
          <h2>Features Overview</h2>
          <div className={styles.featureCards}>
            <div className={styles.card}>
              <Image src="/img/progressTracker.png" alt="Progress Tracker" width={100} height={100} />
              <h3>Progress Tracker</h3>
              <p>Log activities, track mood, and see your growth.</p>
            </div>
            <div className={styles.card}>
              <Image src="/img/personalizedSelfcare.png" alt="Personalized Self-Care" width={100} height={100} />
              <h3>Personalized Self-Care Solutions</h3>
              <p>Activities tailored to your needs. Take a quick quiz and get recommendations.</p>
            </div>
            <div className={styles.card}>
              <Image src="/img/activityCatalog.png" alt="Activity Catalog" width={100} height={100} />
              <h3>Activity Catalog</h3>
              <p>Browse activities for relaxation, fitness, and creativity.</p>
            </div>
          </div>
        </section>

        {/* Mindful Reads */}
        <section className={styles.mindfulReads}>
          <h2>Mindful Reads</h2>
          <div className={styles.articles}>
            <article>
              <Image src="/img/article1.png" alt="Read 1" width={300} height={200} />
              <h3>The Power of Mindfulness: Simple Practices for Daily Peace</h3>
              <p>Discover how mindfulness can transform your daily life. Learn easy practices to reduce stress, improve focus, and enhance overall well-being.</p>
              <button>Read more</button>
            </article>
            <article>
              <Image src="/img/article2.png" alt="Read 2" width={300} height={200} />
              <h3>Creative Outlets for Stress Relief: Why Art Matters</h3>
              <p>Unleash your creativity to cope with stress. From painting to journaling, explore activities that help you relax and express yourself.</p>
              <button>Read more</button>
            </article>
            <article>
              <Image src="/img/article3-1.png" alt="Read 3" width={300} height={200} />
              <h3>The Science of Self-Care: Why Rest is Productive</h3>
              <p>Self-care is more than just a buzzword. Dive into the science behind rest and how it boosts your productivity and mental health.</p>
              <button>Read more</button>
            </article>
          </div>
        </section>

        {/* Quiz Section */}
        <section className={styles.quiz}>
          <h2>Take our quick assessment to discover what works best for you!</h2>
          <button onClick={handleQuizRedirect}>Take the Quiz</button>
        </section>
      </main>
    </>
  );
};

export default Home;
