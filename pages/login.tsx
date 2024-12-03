import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.scss";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default values
    const email = "user123@gmail.com";
    const password = "user123";

    // You can replace this with actual backend logic later
    alert(`Logged in with email: ${email}, password: ${password}`);
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSection}>
        <h1>Sign in to</h1>
        <h2>Daily Dose of You</h2>
        <Image src="/img/logo.png" alt="Logo" width={370} height={370} onClick={() => router.push("/")} />
      </div>
      <div className={styles.rightSection}>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => router.push("/signup")}>Create new account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
