import Header from "../components/Header";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/Profile.module.scss";

const Profile = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <main className={styles.profileContainer}>
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
      </main>
    </>
  );
};

export default Profile;
