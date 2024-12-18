import { useEffect, useState } from "react";
import Header from "../components/Header";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/Profile.module.scss";
import Link from 'next/link';

const Profile = () => {
  const { data: session } = useSession();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      // Ambil data rekomendasi berdasarkan email user
      const storedRecommendations = localStorage.getItem(
        `selfCareRecommendations_${session.user.email}`
      );
      if (storedRecommendations) {
        setRecommendations(JSON.parse(storedRecommendations));
      } else {
        setRecommendations([]);
      }
    }
  }, [session?.user?.email]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <main className={styles.profileContainer}>
        {/* Section: User Information */}
        <section className={styles.userInfo}>
          <h1 className={styles.profileTitle}>Welcome, {session.user?.name}!</h1>
          <img
            src="/img/ava.png"
            alt="User Avatar"
            className={styles.avatar}
          />
          <p className={styles.profileEmail}>Email: {session.user?.email}</p>
        </section>

       {/* Section: Self-Care Recommendations */}
      <section className={styles.recommendations}>
        <h2>Your Self-Care Recommendations</h2>
        <div className={styles.recommendationList}>
          {recommendations.length > 0 ? (
            recommendations.map((activity, index) => (
              <div key={index} className={styles.recommendationCard}>
                <h3>{activity.name}</h3>
                <p>Category: {activity.category}</p>
              </div>
            ))
          ) : (
            <p className={styles.noRecommendations}>
              No recommendations yet. Complete the{" "}
              <Link href="/quiz" passHref>
                <span className={styles.quizLink}>quiz</span>
              </Link>{" "}
              to get your recommendations!
            </p>
          )}
        </div>
      </section>


        {/* Section: Logout Button */}
        <div className={styles.logoutContainer}>
          <button
            className={styles.logoutButton}
            onClick={() => {
              localStorage.removeItem(
                `selfCareRecommendations_${session.user.email}`
              ); // Hapus data rekomendasi user
              signOut({
                callbackUrl: "/login",
              });
            }}
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;