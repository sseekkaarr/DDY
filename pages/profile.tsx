import Header from "../components/Header";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/Profile.module.scss";

const Profile = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  // Dummy data for recommendations
  const recommendations = [
    { name: "Mindfulness Meditation", category: "Mindfulness", duration: "10-15 minutes" },
    { name: "Yoga Stretch", category: "Physical Activity", duration: "15-30 minutes" },
    { name: "Creative Writing", category: "Creativity", duration: "30-45 minutes" },
  ];

  // Dummy data for progress tracker
  const progressData = [
    { date: "2024-12-10", activity: "Yoga Stretch", status: "Completed" },
    { date: "2024-12-11", activity: "Mindfulness Meditation", status: "Skipped" },
  ];

  return (
    <>
      <Header />
      <main className={styles.profileContainer}>
        {/* Section: User Information */}
        <section className={styles.userInfo}>
          <h1 className={styles.profileTitle}>Welcome, {session.user?.name}!</h1>
          <p className={styles.profileEmail}>Email: {session.user?.email}</p>
          <button
            className={styles.logoutButton}
            onClick={() =>
              signOut({
                callbackUrl: "/login",
              })
            }
          >
            Logout
          </button>
        </section>

        {/* Section: Self-Care Recommendations */}
        <section className={styles.recommendations}>
          <h2>Your Self-Care Recommendations</h2>
          <div className={styles.recommendationList}>
            {recommendations.map((activity, index) => (
              <div key={index} className={styles.recommendationCard}>
                <h3>{activity.name}</h3>
                <p>Category: {activity.category}</p>
                <p>Duration: {activity.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Progress Tracker */}
        <section className={styles.progressTracker}>
          <h2>Progress Tracker</h2>
          <table className={styles.progressTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.activity}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Profile;
